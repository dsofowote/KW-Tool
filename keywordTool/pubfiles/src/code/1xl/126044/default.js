integration.meta = {
   'sectionID' : '126044',
   'siteName' : 'Johnston Press RON - Desktop - ( UK )',
   'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
}

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.channelHome = []

integration.params = {
  'mf_siteId': '681841',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '[id^=adTag_]',
	'plr_HideElementsByClass' : 'dc-banner',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("#header").outerHeight();
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headerHeight
			});
        }

		$("body > footer").css({
			"padding-bottom" : "0px"
		});
		$("#header").css({
			"z-index": "99999999"
		});
		$("footer, #footer").css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
		$("#ensNotifyBanner").parent().css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
		$("footer").css({
			"float" : "none"
		});
	}
});
integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000002"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return " ﻿<script>(function(w,t,d,s)t{d=w.document;w.ggpid=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}t(top,13428));</script>";
};
