#![recursion_limit = "512"]

use cfg_if::cfg_if;
use dodrio_ext::prelude::*;

mod models;
mod pages;

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

    pages::main::init_page();
}
