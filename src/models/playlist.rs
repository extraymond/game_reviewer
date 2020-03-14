use super::play;
use crate::models::event_bus;
use afterglow::prelude::*;
use gloo::events::EventListener;
use std::collections::HashSet;

#[derive(Default)]
pub struct Playlist {
    pub plays: Vec<play::Play>,
    pub selected: Option<usize>,
    pub bus: Option<BusService<event_bus::EventsMsg>>,
    pub filter: Filter,
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
        BusInit.dispatch(&sender);
        let keypress = EventListener::new(&win, "keydown", move |e| {
            let e = e.unchecked_ref::<web_sys::Event>();
            PlaylistMsg::KeyPressed(e.clone()).dispatch(&sender);
        });
        handlers.push(keypress);
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
                KeyEvents::Key(key).dispatch(&sender);
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
                target.selected = None;
                target.plays = vec![];
                return true;
            }
        }
        false
    }
}
