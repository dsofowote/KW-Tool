integration.meta = {
	'sectionID' : '128520',
	'siteName' : ' Manager Today - Desktop - (TW)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1024000',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.footer-area, .footer, .main-container, .ads.ads_header, .cc-window.cc-banner{max-width: 1200px; margin: auto;}</style>");
		//$("head").append("<style>.ads.ads_header .banner{display: none;}</style>");
		integration.base.setCfg({
			plr_PageHeightAdjustment : -20
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var headerLeft = ($(window).width() - 1200) / 2;
	$("#header").css({
		"max-width" : "1200px",
		"left" : headerLeft
	});
}
