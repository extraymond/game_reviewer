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

#[wasm_bindgen]
pub fn start() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    if cfg!(debug_assertions) {
        femme::start(log::LevelFilter::Debug).unwrap();
    } else {
        femme::start(log::LevelFilter::Warn).unwrap();
    }

    Entry::init_app::<pages::main::App, pages::main::AppView>("app");
}

#[wasm_bindgen]
pub fn from_sw() {
    log::info!("from within service worker");
}
