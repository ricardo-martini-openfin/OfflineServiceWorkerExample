// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var cacheFiles = [
	'./index.html',
	'./js/app.js',
	'./css/style.css',
	'./online.jpg'
]


self.addEventListener('install', function (e) {
	console.log('[ServiceWorker] Installed');

	// e.waitUntil Delays the event until the Promise is resolved
	e.waitUntil(

		// Open the cache
		caches.open(cacheName).then(function (cache) {

			// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
		})
	); // end e.waitUntil
});


self.addEventListener('activate', function (e) {
	console.log('[ServiceWorker] Activated');

	e.waitUntil(

		// Get all the cache keys (cacheName)
		caches.keys().then(function (cacheNames) {
			return Promise.all(cacheNames.map(function (thisCacheName) {

				// If a cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {

					// Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	); // end e.waitUntil

});


this.addEventListener('fetch', function (event) {
	console.log('[Service Worker] Fetch', event.request.url);
	var dataUrl = 'http://worldclockapi.com/api/json/utc/now';

	if (event.request.url.indexOf(dataUrl) > -1) {
		console.log("Retrieving API")
		event.respondWith(
			//go get the request
			fetch(event.request.url)
				.then((response) => {
					// Once we have it we then clone the response.
					const resClone = response.clone();
					// We then put the cloned response in the cache
					caches.open(cacheName).then(function (cache) {
						cache.put(event.request.url, resClone);
					});
					// then we return it to chrome		
					return response;
				})
				.catch(error => {
					// Return the cache if offline/error
					return caches.match(event.request);
				}));
	} else {
		console.log("Retrieving data from cache")
		event.respondWith(
		    	// if not from api(dataUrl) then retrieve from cache, if not in cache then try network
			caches.match(event.request).then(function (response) {
				return response || fetch(event.request);
			})
		);
	}
});