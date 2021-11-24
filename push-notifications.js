window.addEventListener('load', function(event) {	

	const install_button = document.getElementById('install_button');
	
	let auxPrompt;

	window.addEventListener('beforeinstallprompt', (e) => {
		auxPrompt = e;
	});

	install_button.addEventListener('click', () => {
		auxPrompt.prompt();
	});
	
	const notification_button = document.getElementById('notification_button');
	notification_button.addEventListener('click', () => {

		Notification.requestPermission().then((result) => {
			if (result === 'granted') {

				const notifBody = 'Hello World!';
				const notifImg = '/logo.jpg';

				const options = {
					body: notifBody,
					icon: notifImg,
				};

				navigator.serviceWorker.getRegistration().then(function(reg) {
					reg.showNotification("Webinar PWA", options);
				});
			}
		});
	})
});
