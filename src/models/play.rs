use afterglow::prelude::*;
use strum_macros::*;

#[derive(Default)]
pub struct Play {
    pub time: f64,
    pub genre: Genre,
}

#[derive(Display, Clone, Eq, Hash, PartialEq, EnumIter, Copy)]
pub enum Genre {
    Other,
    Offense,
    Defense,
}

impl Default for Genre {
    fn default() -> Self {
        Genre::Other
    }
}
