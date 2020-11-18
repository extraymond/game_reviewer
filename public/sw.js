// importScripts("./game_reviewer.js");


self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                "./index.html",
                "./game_reviewer_bg.wasm",
                "./game_reviewer.js",
                "./snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js"
            ])
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return resp || fetch(event.request).then((response) => {
                return caches.open('v1').then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


self.addEventListener("push", e => {
    console.log("pushed", e)
    e.waitUntil(
        (sleep(5000).then(e => {
            self.registration.showNotification("worker!", {})
        }))
    )
})

self.addEventListener("active", e => {})