const files_to_cache = [
	'/',
	'/index.html',
	'/manifest.json',
	'/logo_branco.png',
	'/logo.png',
	'/logo.jpg',
	'/register-service-worker.js',
	'/service-worker.js',
	'/push-notifications.js',
];

self.addEventListener('install', installEvent => {

	console.log('Service Worker installed');

	installEvent.waitUntil(
	  caches.open('WebinarPWA').then(cache => {
		  console.log('Adding files to cache...');
		  cache.addAll(files_to_cache);
	  })
	)
});

self.addEventListener('fetch', fetchEvent =>{

	fetchEvent.respondWith(
		caches.match(fetchEvent.request)
			.then(function(res) {
				if (res) {
					return res;
				}
				else {
					return(fetch(fetchEvent.request));
				}
			})
	)
});