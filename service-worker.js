self.addEventListener('install', function(event) {
  console.log('[Service Worker] Instalado');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Ativado');
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
