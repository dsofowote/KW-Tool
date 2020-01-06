integration.on('init', function(){
    var getScriptParams = function(re, sep) {
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

    var hostname = window.location.hostname;
    var siteDomain = hostname;
    var blocklist = ["www.brighouseecho.co.uk","www.brightonandhoveindependent.co.uk","www.buckinghamtoday.co.uk","www.buxtonadvertiser.co.uk","www.carricktoday.co.uk","www.crawleyobserver.co.uk","www.deesidepiper.co.uk","www.derryjournal.com","www.donsidepiper.co.uk","www.dromoreleader.co.uk","www.eastwoodadvertiser.co.uk","www.edinburghnews.scotsman.com","www.ellontimes.co.uk","www.fileymercury.co.uk","www.fraserburghherald.co.uk","www.gallowaygazette.co.uk","www.garstangcourier.co.uk","www.glasgowsouthandeastwoodextra.co.uk","www.inverurieherald.co.uk","www.kincardineshireobserver.co.uk","www.longridgenews.co.uk","www.mearnsleader.co.uk","www.mirfieldreporter.co.uk","www.newsguardian.co.uk","www.northyorkshirenews.com","www.pocklingtonpost.co.uk","www.pontefractandcastlefordexpress.co.uk","www.retfordtoday.co.uk","www.rugbyadvertiser.co.uk","www.stornowaygazette.co.uk","www.thametoday.co.uk","www.thornegazette.co.uk","www.tringtoday.co.uk","www.westsussextoday.co.uk","www.wetherbynews.co.uk","www.tmxnews.co.uk","www.dirtbikerider.com"]
    for (var i = 0; i < blocklist.length; i++) {
        if (blocklist[i] == siteDomain) {
            var scriptParams = getScriptParams();
            scriptParams.srv_Keywords = "aegisblock";
            integration.params.srv_Keywords = scriptParams.srv_Keywords;
        }
    }
});