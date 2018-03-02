const CACHE_NAME = 'ZARATEDEV_CACHE-v1'

self.addEventListener('install', function() {
  // Save files initiales
  caches.open(CACHE_NAME).then(function (cache) {
    cache.addAll(['/index.html', '/dist/js/bundle.js', '/public/images/1.jpeg']);
  })
});

// Eliminar el cache del service worker antigua y lo remplaza
self.addEventListener('activate', function(ev) {
  ev.waitUntil(
    caches.keys().then( function(cacheNames) {

      let promises = cacheNames.map(cacheName => {
        if ( CACHE_NAME !== cacheName ) return caches.delete(cacheName)
      })

      return Promise.all( promises );
    })
  );
});

//Envio de archivos desde el cache
self.addEventListener('fetch', function(ev) {
  ev.respondWith(
    caches.match(ev.request)
      .then( function(response) {
        return searchInCacheOrMarkeRequest(ev.request);
      })
      .catch( function(err) {
        if ( ev.request.mode == "navigate")
          return caches.match(ev.request);
      })
  );
});

function searchInCacheOrMarkeRequest( request ) {
  const cachePromise = caches.open(CACHE_NAME);
  const matchPromise = cachePromise.then( function(cache) {
    return cache.match( request );
  });

  return Promise.all([cachePromise, matchPromise]).then( function([cache, cacheResponse]) {
    const fetchPromise = fetch(request).then( function( fetchResponse ) {
      cache.put(request, fetchResponse.clone());

      return fetchResponse;
    });

    return cacheResponse || fetchPromise;

  })
}
