const staticCacheName = 'static-cache-v1'

const assetsUrls = ['index.html']

self.addEventListener('install', event => {
  event.waitUntil(caches.open(staticCacheName)).then(cache => cache.addAll(assetsUrls))
})

self.addEventListener('activate', event => {
  console.log('[SW]:activate')
})
