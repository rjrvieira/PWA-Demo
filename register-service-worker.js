if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register("/service-worker.js")
		.then(res => console.log("Service Worker registered!"))
		.catch(err => console.log("Service Worker not registered!", err))
}