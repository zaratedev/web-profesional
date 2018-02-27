const CACHE_NAME = 'ZARATEDEV_CACHE-v1'

self.addEventListener('install', function() {
  // Save files initiales
  caches.open(CACHE_NAME).then(function (cache) {
    cache.addAll(['/index.html']);
  })
});

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
