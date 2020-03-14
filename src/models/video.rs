use crate::models::{event_bus, play};
use afterglow::prelude::*;
use gloo::events::EventListener;

#[derive(Default)]
pub struct Model {
    pub url: Option<String>,
    pub file: Option<web_sys::File>,
    pub vid: Option<web_sys::HtmlMediaElement>,
    pub bus: Option<BusService<event_bus::EventsMsg>>,
}

impl LifeCycle for Model {
    fn new(render_tx: Sender<()>) -> Self {
        let bus = BusService::new();
        Model {
            bus: Some(bus),
            ..Model::default()
        }
    }

    fn mounted(
        sender: MessageSender<Self>,
        render_tx: Sender<()>,
        handlers: &mut Vec<EventListener>,
    ) {
        BusInit::Init.dispatch(&sender);
        let window: web_sys::EventTarget = web_sys::window().unwrap().unchecked_into();
        let onkeypress = EventListener::new(&window, "keypress", move |e| {
            KeyEvent {
                event: e.clone().unchecked_into(),
            }
            .dispatch(&sender);
        });
        handlers.push(onkeypress);
    }
}

pub enum BusInit {
    Init,
}

impl Messenger for BusInit {
    type Target = Model;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        match self {
            BusInit::Init => {
                target.bus.as_mut().map(|bus| {
                    bus.register(sender.clone());
                });
            }
        }
        false
    }
}

pub enum FileEvent {
    Added(web_sys::Event),
    VidLoaded(web_sys::HtmlMediaElement),
    Removed,
    Notified,
}

impl Messenger for FileEvent {
    type Target = Model;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        match self {
            FileEvent::Added(e) => {
                let input = e
                    .target()
                    .unwrap()
                    .unchecked_into::<web_sys::HtmlInputElement>();

                return input
                    .files()
                    .map(|files| files.get(0))
                    .flatten()
                    .map(|file| {
                        target.file.replace(file.clone());
                        let _ = web_sys::Url::create_object_url_with_blob(&file).map(|url| {
                            target.url.replace(url.clone());
                            target.bus.as_ref().map(|bus| {
                                bus.publish(event_bus::EventsMsg::NewFile(url));
                            });
                        });

                        true
                    })
                    .unwrap_or_default();
            }
            FileEvent::VidLoaded(vid) => {
                target.vid.replace(vid.clone());
            }
            FileEvent::Removed => {
                if target.file.is_some() {
                    target.file = None;
                    target.vid = None;
                    target.url = None;
                    target.bus.as_ref().map(|bus| {
                        bus.publish(event_bus::EventsMsg::FileRemoved);
                    });
                    return true;
                }
            }
            _ => {
                log::trace!("notified");
            }
        }

        false
    }
}

pub struct KeyEvent {
    event: web_sys::KeyboardEvent,
}

impl Messenger for KeyEvent {
    type Target = Model;

    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        let KeyEvent { event } = self;
        match &*event.key() {
            "o" => {
                if let Some(vid) = target.vid.as_ref() {
                    vid.pause().expect("unable to pause video");
                    target.bus.as_ref().map(|bus| {
                        bus.publish(event_bus::EventsMsg::NewEvent(
                            vid.current_time(),
                            play::Genre::Offense,
                        ));
                    });
                };
            }
            "i" => {
                if let Some(vid) = target.vid.as_ref() {
                    vid.pause().expect("unable to pause video");
                    target.bus.as_ref().map(|bus| {
                        bus.publish(event_bus::EventsMsg::NewEvent(
                            vid.current_time(),
                            play::Genre::Defense,
                        ));
                    });
                };
            }
            "u" => {
                if let Some(vid) = target.vid.as_ref() {
                    vid.pause().expect("unable to pause video");
                    target.bus.as_ref().map(|bus| {
                        bus.publish(event_bus::EventsMsg::NewEvent(
                            vid.current_time(),
                            play::Genre::Other,
                        ));
                    });
                };
            }
            _ => {}
        }

        false
    }
}

pub enum BusNotification {
    EventFocused(f64),
}

impl Messenger for BusNotification {
    type Target = Model;
    fn update(
        &self,
        target: &mut Self::Target,
        sender: MessageSender<Self::Target>,
        render_tx: Sender<()>,
    ) -> bool {
        match self {
            BusNotification::EventFocused(time) => {
                target.vid.as_ref().map(|vid| {
                    vid.set_current_time(*time);
                    if vid.paused() {
                        vid.play().expect("unable to play");
                    }
                });
            }
        }

        false
    }
}
