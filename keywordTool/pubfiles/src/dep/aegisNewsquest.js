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
    var siteDomain = hostname.slice(4);
    var blocklist = ["ayradvertiser.com","banburycake.co.uk","barryanddistrictnews.co.uk","basildonstandard.co.uk","bordercountiesadvertizer.co.uk","bordercountiesadvertizer.co.uk","brentwoodlive.co.uk","bromsgroveadvertiser.co.uk","burnhamandhighbridgeweeklynews.co.uk","campaignseries.co.uk","carrickherald.com","centralfifetimes.com","chelmsfordweeklynews.co.uk","chesterlestreetadvertiser.co.uk","Countrypress.co.uk","chesterstandard.co.uk","chorleycitizen.co.uk","consettstanleyadvertiser.co.uk","cotswoldjournal.co.uk","creweguardian.co.uk","cumnockchronicle.com","dorsetbeaches.co.uk","droitwichadvertiser.co.uk","ealingtimes.co.uk","eastkilbrideconnect.co.uk","hillingdontimes.co.uk","largsandmillportnews.com","ledburyreporter.co.uk","localadmag.co.uk","localberkshire.co.uk","localbygones.co.uk","ludlowadvertiser.co.uk","malverngazette.co.uk","middlewichguardian.co.uk","newforestpost.co.uk","northwaleschronicle.co.uk","northwalespioneer.co.uk","northyorkshireadvertiser.co.uk","peeblesshirenews.com","penarthtimes.co.uk","redhillandreigatelife.co.uk","rhyljournal.co.uk","romseyadvertiser.co.uk","smallholder.co.uk","southwalesguardian.co.uk","southwestfarmer.co.uk","stirlingnews.co.uk","strathallantimes.co.uk","swanageandwarehamvoice.co.uk","thelancasterandmorecambecitizen.co.uk","thetottenhamindependent.co.uk","thevillager.co.uk","thisisbasildon.co.uk","tivysideadvertiser.co.uk","troontimes.com","wearvalleyadvertiser.co.uk","whitchurchherald.co.uk","wilmslowguardian.co.uk","windsorobserver.co.uk","yeovilexpress.co.uk","cumberlandnews.co.uk","cumbrialive.co.uk","eladvertiser.co.uk","hexhamcourant.co.uk","in-cumbria.co.uk","newemail.co.uk","petsincumbria.co.uk"]
    for (var i = 0; i < blocklist.length; i++) {
        if (blocklist[i] == siteDomain) {
            var scriptParams = getScriptParams();
            scriptParams.srv_Keywords = "aegisblock";
            integration.params.srv_Keywords = scriptParams.srv_Keywords;
        }
    }
});