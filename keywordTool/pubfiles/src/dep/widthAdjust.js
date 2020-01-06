integration.on('init', function(){
    integration.custom.getScriptParams = function(re, sep) {
		if (!re && SCRIPT_ID)
			re = new RegExp(SCRIPT_ID.replace('/', '\\\/') + '\\.js\\?autoload([^A-Za-z0-9]+)(.*)$');
		if (!sep)
			sep = '&';

		if (!re)
			return {};

		var scripts = currentWindow.document.getElementsByTagName('script'),
		    matches = null;

		for (var i = 0; i < scripts.length; i++) {
			if (!( matches = scripts[i].src.match(re)))
				continue;

			var params = {},
			    str = '';

			if (matches.length == 3) {
				sep = matches[1];
				str = matches[2];
			} else {
				str = matches[1];
			}

			var a = str.split(sep);
			for (var j = 0; j < a.length; j++) {
				if (a[j] == '')
					continue;
				var b = a[j].split('=');
				params[b[0]] = ( typeof (b[1]) != 'undefined' ? decodeURIComponent(b[1]) : '');
			}

			// get script parameters passed through another object defined on window:
			if (params.id && currentWindow[params.id]) {
				for (var k in currentWindow[params.id]) {
					params[k] = currentWindow[params.id][k];
				}
			}

			return params;
		}

		return {};
    };
});