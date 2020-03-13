use crate::models::{play, playlist, video};
use afterglow::prelude::*;

#[derive(Clone)]
pub enum EventsMsg {
    NewEvent(f64, play::Genre),
    NewFile(String),
    EventFocused(f64),
    FileRemoved,
}

impl Into<Option<Message<playlist::Playlist>>> for EventsMsg {
    fn into(self) -> Option<Message<playlist::Playlist>> {
        match self {
            EventsMsg::NewFile(url) => Some(Box::new(playlist::BusNotification::NewFile(url))),
            EventsMsg::NewEvent(time, genre) => {
                Some(Box::new(playlist::BusNotification::NewEvent(time, genre)))
            }
            EventsMsg::FileRemoved => Some(Box::new(playlist::BusNotification::FileRemoved)),
            _ => None,
        }
    }
}

impl Into<Option<Message<video::Model>>> for EventsMsg {
    fn into(self) -> Option<Message<video::Model>> {
        match self {
            EventsMsg::EventFocused(time) => {
                Some(Box::new(video::BusNotification::EventFocused(time)))
            }
            _ => None,
        }
    }
}
