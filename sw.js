const CACHE_NAME = "petiscopet-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./manifest_and_icons/icon512_rounded.png",
    "./manifest_and_icons/icon512_maskable.png"
];


// ================================
// INSTALAÇÃO
// ================================

self.addEventListener("install", (event) => {

    console.log("[SW] Instalando...");

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(async (cache) => {

                for (const file of FILES_TO_CACHE) {

                    try {

                        await cache.add(file);

                        console.log("[SW] Cacheado:", file);

                    } catch (error) {

                        console.error(
                            "[SW] Não foi possível cachear:",
                            file,
                            error
                        );

                    }

                }

            })

    );

    self.skipWaiting();

});


// ================================
// ATIVAÇÃO
// ================================

self.addEventListener("activate", (event) => {

    console.log("[SW] Ativando...");

    event.waitUntil(

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames
                        .filter((cacheName) => {

                            return cacheName !== CACHE_NAME;

                        })
                        .map((cacheName) => {

                            console.log(
                                "[SW] Removendo cache antigo:",
                                cacheName
                            );

                            return caches.delete(cacheName);

                        })

                );

            })
            .then(() => {

                console.log("[SW] Ativado!");

                return self.clients.claim();

            })

    );

});


// ================================
// REQUISIÇÕES
// ================================

self.addEventListener("fetch", (event) => {

    // Apenas requisições GET
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(

        caches.match(event.request)
            .then((cachedResponse) => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .then((response) => {

                        return response;

                    });

            })
            .catch(() => {

                console.log(
                    "[SW] Recurso indisponível offline:",
                    event.request.url
                );

                return caches.match("./index.html");

            })

    );

});
