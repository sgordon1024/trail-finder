const CACHE = 'trail-finder-v1';
const TILE_CACHE = 'trail-finder-tiles-v1';

const APP_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  './vendor/leaflet.js',
  './vendor/leaflet.css',
  './vendor/leaflet.markercluster.js',
  './vendor/MarkerCluster.css',
  './vendor/MarkerCluster.Default.css',
];

// Install — cache core app assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE && k !== TILE_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch — cache-first for app assets, network-first for tiles, network-first for CDN libs
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Map tiles — cache then network
  if (url.includes('tile.openstreetmap.org')) {
    e.respondWith(
      caches.open(TILE_CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            if (res.ok) cache.put(e.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // App assets — cache-first
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached ||
      fetch(e.request).then(res => {
        if (res.ok) {
          caches.open(CACHE).then(cache => cache.put(e.request, res.clone()));
        }
        return res;
      })
    )
  );
});
