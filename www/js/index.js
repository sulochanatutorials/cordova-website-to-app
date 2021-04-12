
function redirectTo(location) {
	window.open = cordova.InAppBrowser.open;
	//showPleasewait('Redirecting','Please wait');
	var d = setInterval(function () {
		window.open(location, '_self',
			'location=no,zoom=no,toolbar=no');
		clearInterval(d);
	}, 1500);
}

var app = {
		// Application Constructor
		initialize: function () {
			document.addEventListener('deviceready',
				this.onDeviceReady.bind(this), false);
		},
		// deviceready Event Handler
		//
		// Bind any cordova events here. Common events are:
		// 'pause', 'resume', etc.
		onDeviceReady: function () {
			this.receivedEvent('deviceready');
		},
		// Update DOM on a Received Event
		receivedEvent: function (id) {
			if (navigator.connection.type == Connection.NONE) {
				navigator.notification.alert('An internet connection is required to continue ');
				}
				else {
					redirectTo("https://agridoctor.net");
					//Replce URL with your website URL
				}
			}
		};
		app.initialize();