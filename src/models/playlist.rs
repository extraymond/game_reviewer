use super::play;
use crate::models::event_bus;
use afterglow::prelude::*;
use gloo::events::EventListener;
use serde::{Deserialize, Serialize};
use std::collections::HashSet;

#[derive(Default)]
pub struct Playlist {
    pub plays: Vec<play::Play>,
    pub selected: Option<usize>,
    pub bus: Option<BusService<event_bus::EventsMsg>>,
    pub filter: Filter,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct CachePlays {
    pub plays: Vec<play::Play>,
}

impl Playlist {
    fn make_backup(&self) -> CachePlays {
        log::info!("current plays: {}", self.plays.len());
        let plays = self.plays.clone();
        CachePlays { plays }
    }
}

#[derive(Default)]
pub struct Filter {
    pub active: bool,
    pub genre: HashSet<play::Genre>,
    pub range: [f64; 2],
    pub length: [f64; 2],
    pub slider_focused: Option<usize>,
}

pub enum FilterEvent {
    Toggle,
    ToggleGenre(play::Genre),
}

impl Messenger for FilterEvent {
    type Target = Playlist;
    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        match self {
            FilterEvent::Toggle => {
                target.filter.active = !target.filter.active;
                return true;
            }
            FilterEvent::ToggleGenre(genre) => {
                if target.filter.genre.get(&genre).is_some() {
                    target.filter.genre.remove(&genre);
                } else {
                    target.filter.genre.insert(*genre);
                }
                return true;
            }
        }
        false
    }
}

impl LifeCycle for Playlist {
    fn new(render_tx: Sender<()>) -> Self {
        Playlist {
            filter: Filter {
                range: [0_f64; 2],
                length: [50_f64; 2],
                ..Filter::default()
            },
            ..Playlist::default()
        }
    }

    fn mounted(
        sender: MessageSender<Self>,
        render_tx: Sender<()>,
        handlers: &mut Vec<EventListener>,
    ) {
        let win = web_sys::window().unwrap();
        spawn_local(BusInit.dispatch(&sender));
        let sender_handle = sender.clone();
        let keypress = EventListener::new(&win, "keydown", move |e| {
            let e = e.unchecked_ref::<web_sys::Event>();
            spawn_local(PlaylistMsg::KeyPressed(e.clone()).dispatch(&sender_handle));
        });
        handlers.push(keypress);

        let db = win.indexed_db().unwrap().unwrap();
        let req = db.open("cache").unwrap();
        let req_handle = req.clone();
        let onopen = EventListener::new(req.clone().unchecked_ref(), "success", move |e| {
            log::info!("request opend");

            let db: web_sys::IdbDatabase = req_handle.result().unwrap().unchecked_into();
            let transaction = db
                .transaction_with_str_and_mode("plays", web_sys::IdbTransactionMode::Readwrite)
                .unwrap();
            let store = transaction.object_store("plays").unwrap();
            let count_req = store.get_all_keys().unwrap();
            let sender = sender.clone();

            let onopen =
                EventListener::new(count_req.clone().unchecked_ref(), "success", move |e| {
                    let sender = sender.clone();
                    let keys = count_req
                        .result()
                        .unwrap()
                        .unchecked_into::<js_sys::Array>();

                    let key = keys.get(keys.length() - 1);
                    let get_req = store.get(&key).unwrap();
                    let onopen =
                        EventListener::new(get_req.clone().unchecked_ref(), "success", move |e| {
                            let item = get_req.result().unwrap();
                            let buffer_js: js_sys::Uint8Array = item.into();
                            log::info!("buffer size: {}", buffer_js.length());
                            log::info!("js buffer: {:?}", buffer_js);
                            let mut buffer = vec![0_u8; buffer_js.length() as usize];
                            buffer_js.copy_to(&mut buffer[..]);
                            let plays: CachePlays = bincode::deserialize(&buffer[..]).unwrap();
                            spawn_local(PlaylistMsg::LoadBackup(plays).dispatch(&sender));
                            // log::info!("retried plays!!!");
                        });
                    onopen.forget();
                });
            onopen.forget();
        });

        onopen.forget();
        let req_handle = req.clone();

        let ondbupgrade =
            EventListener::new(&req.clone().unchecked_ref(), "upgradeneeded", move |_| {
                let db: web_sys::IdbDatabase = req_handle.result().unwrap().unchecked_into();

                let names = db.object_store_names();

                let mut has_plays = false;
                for idx in 0..names.length() as usize {
                    let name = names.get(idx as u32).unwrap();
                    if name == "plays" {
                        has_plays = true;
                    }
                }

                if !has_plays {
                    let mut option = web_sys::IdbObjectStoreParameters::new();
                    option.auto_increment(true);
                    db.create_object_store_with_optional_parameters("plays", &option)
                        .unwrap();
                }
            });

        ondbupgrade.forget();
    }
}

pub struct BusInit;
impl Messenger for BusInit {
    type Target = Playlist;
    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        if let Some(bus) = target.bus.as_mut() {
            bus.register(sender.clone());
        }
        false
    }
}
pub enum PlaylistMsg {
    PlayClicked(usize),
    PlayDBClicked(usize),
    KeyPressed(web_sys::Event),
    MakeBackup,
    LoadBackup(CachePlays),
}

impl Messenger for PlaylistMsg {
    type Target = Playlist;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        match self {
            PlaylistMsg::PlayClicked(idx) => {
                if let Some(old) = target.selected {
                    if old == *idx {
                        target.selected = None;
                        return true;
                    }
                }
                target.selected.replace(*idx);
                return true;
            }
            PlaylistMsg::PlayDBClicked(idx) => {
                if let Some(play) = target.plays.get(*idx) {
                    let time = play.time;
                    target.bus.as_ref().map(|bus| {
                        bus.publish(event_bus::EventsMsg::EventFocused(time));
                    });
                }
            }
            PlaylistMsg::KeyPressed(e) => {
                let e = e.unchecked_ref::<web_sys::KeyboardEvent>();
                let key = e.key();
                spawn_local(KeyEvents::Key(key).dispatch(&sender));
            }
            PlaylistMsg::MakeBackup => {
                let plays = target.make_backup();
                let buffer = bincode::serialize(&plays).unwrap();
                let js_buffer = js_sys::Uint8Array::from(&buffer[..]);

                let win = web_sys::window().unwrap();
                let db = win.indexed_db().unwrap().unwrap();
                let req = db.open("cache").unwrap();
                let req_handle = req.clone();
                let onsuccess =
                    EventListener::new(req.clone().unchecked_ref(), "success", move |e| {
                        log::info!("request opend");

                        let db: web_sys::IdbDatabase =
                            req_handle.result().unwrap().unchecked_into();
                        let transaction = db
                            .transaction_with_str_and_mode(
                                "plays",
                                web_sys::IdbTransactionMode::Readwrite,
                            )
                            .unwrap();
                        let store = transaction.object_store("plays").unwrap();
                        store.add(&js_buffer).unwrap();
                    });
                onsuccess.forget();
            }
            PlaylistMsg::LoadBackup(plays) => {
                let CachePlays { plays } = plays;
                target.plays = plays.to_vec();
                return true;
            }
        }
        false
    }
}

pub enum KeyEvents {
    Key(String),
}

impl Messenger for KeyEvents {
    type Target = Playlist;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        let KeyEvents::Key(key) = self;

        match &**key {
            "d" | "Delete" => {
                return target
                    .selected
                    .map(|idx| {
                        if target.plays.get(idx).is_some() {
                            if idx == target.plays.len() - 1 {
                                target.selected = None;
                            }
                            target.plays.remove(idx);
                            true
                        } else {
                            false
                        }
                    })
                    .unwrap_or_default()
            }
            "p" => {
                if let Some(idx) = target.selected.as_ref() {
                    if let Some(play) = target.plays.get(*idx) {
                        let time = play.time;
                        target.bus.as_ref().map(|bus| {
                            bus.publish(event_bus::EventsMsg::EventFocused(time as f64));
                        });
                    }
                }
            }
            "j" => {
                if let Some(idx) = target.selected {
                    if idx > 0 {
                        target.selected.replace(idx - 1);
                        return true;
                    }
                }
            }
            "k" => {
                if let Some(idx) = target.selected {
                    if idx < target.plays.len() - 1 {
                        target.selected.replace(idx + 1);
                        return true;
                    }
                }
            }
            _ => {}
        }
        false
    }
}

pub enum BusNotification {
    NewFile(String),
    NewEvent(f64, play::Genre),
    FileRemoved,
}

impl Messenger for BusNotification {
    type Target = Playlist;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        match self {
            BusNotification::NewFile(url) => {
                target.selected = None;
                target.plays = vec![];
                return true;
            }
            BusNotification::NewEvent(time, genre) => {
                let mut play = play::Play::default();
                play.genre = *genre;
                play.time = *time as f64;
                target.plays.push(play);
                return true;
            }
            BusNotification::FileRemoved => {
                let pre_task = PlaylistMsg::MakeBackup.dispatch(&sender);
                let after = BusNotification::NewFile("".into()).dispatch(&sender);
                spawn_local(async move {
                    pre_task.await;
                    after.await;
                })
            }
        }
        false
    }
}
