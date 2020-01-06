tests["browser_resolution"] = function(threshold) {
	if ( typeof threshold === "undefined") {
		return true
	}
	var screenwidth = window.innerWidth;
	var screenHeight = window.innerHeight;
	if (screenwidth >= threshold) {
		return true
	} else {
		/* OS Desktop */
		var reg_win2000 = /Windows\sNT\s([5]{1,}([\.][0]{1,}))/igm;
		var reg_winXP = /Windows\sNT\s([5]{1,}([\.][1-2]{1,}))/igm;
		var reg_winVista = /Windows\sNT\s([6]{1,}([\.][0]{1,}))/igm;
		var reg_win7 = /Windows\sNT\s([6]{1,}([\.][1]{1,}))/igm;
		var reg_win8 = /(?!.*Touch)Windows\sNT\s([6]{1,}([\.][2-3]{1,}))/igm;
		var reg_win10 = /.*(Windows NT 10.).*/igm;
		var reg_mac = /^(?=.*Macintosh)(?!.*(android|Silk)).*$/igm;
		var reg_linux = /^(?=.*(Linux))(?!.*(android|Silk)).*$/igm;
		if (reg_win2000.test(navigator.userAgent) || reg_winXP.test(navigator.userAgent) || reg_winVista.test(navigator.userAgent) || reg_win7.test(navigator.userAgent) || reg_win8.test(navigator.userAgent) || reg_win10.test(navigator.userAgent) || reg_mac.test(navigator.userAgent) || reg_linux.test(navigator.userAgent)) {
			var platform = "Browser Resolution - ";
		} else {
			var platform = "";
		}
		return (platform + screenwidth + " x " + screenHeight);
	}
};

