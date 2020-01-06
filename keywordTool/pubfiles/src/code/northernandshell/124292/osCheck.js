//var jscript = document.getElementsByTagName('head');
//jscript.innerHTML += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>';
//console.log("fired?");

function getMobileOperatingSystem() {
	var isMobile = {
		Android : function() {
			return navigator.userAgent.match(/Android/i)
		},
		iOS : function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i)
		},
	};
	if (isMobile.iOS()) {
		integration.custom.ios = true;
	}
	if (isMobile.Android()) {
		integration.custom.android = true;
	}
}

getMobileOperatingSystem(); 