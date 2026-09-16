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

    console.log("Service Worker: instalando...");

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {

                console.log("Service Worker: arquivos em cache");

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});


// ================================
// ATIVAÇÃO
// ================================

self.addEventListener("activate", (event) => {

    console.log("Service Worker: ativado");

    event.waitUntil(

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames
                        .filter((cacheName) => {

                            return cacheName !== CACHE_NAME;

                        })
                        .map((cacheName) => {

                            return caches.delete(cacheName);

                        })

                );

            })

    );

    self.clients.claim();

});


// ================================
// INTERCEPTAÇÃO DAS REQUISIÇÕES
// ================================

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)
            .then((cachedResponse) => {

                // Se estiver no cache, utiliza o cache
                if (cachedResponse) {

                    return cachedResponse;

                }

                // Caso contrário, busca na internet
                return fetch(event.request);

            })

    );

});