use afterglow::prelude::*;
use web_sys::{ServiceWorkerGlobalScope, WorkerGlobalScope};

pub async fn init_sw() {
    log::info!("try to get service worker");
    let nav = web_sys::window().map(|win| win.navigator()).unwrap();
    let fut = JsFuture::from(nav.service_worker().register("./sw.js"));
    let registry: web_sys::ServiceWorkerRegistration = fut.await.unwrap().unchecked_into();

    log::info!("registration complete");

    let req: JsFuture = web_sys::Notification::request_permission().unwrap().into();
    let _ = req.await;
    log::info!("request complete");
    let info = web_sys::Notification::new("hello!").unwrap();
    // registry.show_notification("registered");
}
