integration.meta = {
   'sectionID' : '123966',
   'siteName' : 'InStyle - (Standard PageSkin Only) - Desktop - (UK)',
   'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1276]
};

integration.params = {
	'mf_siteId' : '704784',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1016,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "leaderboard, mpu, ads",
	"plr_HideElementsByClass" : "",
	"plr_PageHeightAdjustment" : -26,
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (!window.inskinrefreshcount) {
			window.inskinrefreshcount = 0;
			$("head").append("<style> #masthead {max-width : 1016px;} </style>");
		}
		// your code here
		$('.fb-recommendations-bar').hide();
		$('#masthead-wrapper').css({
			"max-width" : "1016px"
		});
		$('#masthead').css({
			'zIndex' : '5000'
		});
		/* Stops the site from jumping down when the PageSkin loads after previously unloading */
		$("body").css({
			"margin-top" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
	integration.custom.refreshWait();
	refreshWait();
	/* Logic to call function on publishers page */
	try {
		ipc.inskin.callback();
	} catch (e) {
	}
});

integration.custom.refreshWait = function() {
	try {
		if (window.ipcTags.type == "gallery") {
			setTimeout(integration.custom.refreshGallery, 60 * 1000);
		}
	} catch(e) {
	}
}

integration.custom.refreshGallery = function() {
	window.inskinrefreshcount++;
	integration.base.unloadAd();
	/* Stops the site from jumping up when the PageSkin unloads */
	$("body").css({
		"margin-top" : "100px"
	});
	integration.base.makeAdCall({});
	integration.telemetry.recordCustom('Refresh_' + window.inskinrefreshcount);
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\n googletag.pubads().definePassback('/18711560/instyle', [[970, 250]])\n .display();\n<\\script>";
}; 
