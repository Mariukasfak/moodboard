// Service worker version
const CACHE_VERSION = 'v1';
const CACHE_NAME = `transportuok-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/react-vendor.js',
  '/assets/icons.js',
  '/images/hero-bg-appliances-small.webp',
  '/images/hero-bg-appliances-medium.webp',
  '/images/hero-bg-appliances-large.webp',
  '/images/buitine-technika.webp',
  '/images/elektronika.webp',
  '/images/baldai.webp',
  '/images/metalo-lauzas.webp',
  '/ikona_spalvotas.svg'
];

// Check if the current request is for a chrome extension or non-https URL
const shouldHandleRequest = (url) => {
  return url.startsWith('https://') && 
         !url.startsWith('chrome-extension://') &&
         !url.includes('google-analytics.com') &&
         !url.includes('googletagmanager.com');
};

// Install event - precache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName.startsWith('transportuok-') && cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Skip non-GET requests and non-https URLs
  if (event.request.method !== 'GET' || !shouldHandleRequest(event.request.url)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses or non-asset responses
            if (!response || response.status !== 200 || !response.url.match(/\.(js|css|webp|svg|png|jpg|jpeg|gif|woff2?)$/)) {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                if (shouldHandleRequest(event.request.url)) {
                  cache.put(event.request, responseToCache);
                }
              })
              .catch(error => {
                console.error('Cache put error:', error);
              });

            return response;
          })
          .catch(() => {
            // Return a fallback response for failed network requests
            return new Response('Network error occurred', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Handle errors
self.addEventListener('error', event => {
  console.error('Service Worker error:', event.error);
});

// Handle unhandled promise rejections
self.addEventListener('unhandledrejection', event => {
  console.error('Service Worker unhandled promise rejection:', event.reason);
});