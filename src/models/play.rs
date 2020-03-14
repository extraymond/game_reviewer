use afterglow::prelude::*;
use dodrio::bumpalo::Bump;
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

impl Genre {
    pub fn color_tag<'a>(&self, bump: &'a Bump) -> &'a str {
        let color = match self {
            Genre::Offense => "is-warning",
            Genre::Defense => "is-primary",
            Genre::Other => "",
        };

        bf!(in bump, "tag {}", color).into_bump_str()
    }
}

impl Default for Genre {
    fn default() -> Self {
        Genre::Other
    }
}
