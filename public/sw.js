// 基础的Service Worker注册代码
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          return caches.delete(cache);
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // 简单的缓存策略
  event.respondWith(
    caches.open('hustoday-cache').then((cache) => {
      return cache.match(event.request).then((response) => {
        return response || fetch(event.request).then((newResponse) => {
          cache.put(event.request, newResponse.clone());
          return newResponse;
        });
      });
    })
  );
});
