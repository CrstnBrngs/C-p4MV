self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        './index.html',
        './C#P4 Modes Visualizer by Cristian Bringas.html'
        // Agrega aquí otros archivos como CSS, JS o imágenes si los tienes
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});