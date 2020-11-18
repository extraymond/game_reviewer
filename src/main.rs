#![recursion_limit = "512"]

use afterglow::prelude::*;
use cfg_if::cfg_if;

mod models;
mod pages;
mod sw;
mod views;

cfg_if! {
    if #[cfg(feature = "wee_alloc")] {
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

fn main() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    if cfg!(debug_assertions) {
        femme::with_level(log::LevelFilter::Debug);
    } else {
        femme::with_level(log::LevelFilter::Warn);
    }

    Entry::init_app::<pages::main::App, pages::main::AppView>(Some("app"));
}

#[wasm_bindgen]
pub fn from_sw() {
    log::info!("from within service worker");
}
