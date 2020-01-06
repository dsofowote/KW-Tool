integration.meta = {
	'sectionID' : '128591',
	'siteName' : 'DCFever - Desktop - ( HK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1024521',
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
		var scrollAdjust = $(".nav_level_two_wrapper").height();
		integration.base.setCfg({
			'plr_ScrollAdjustment' : scrollAdjust
		});
		$(".site_wrapper").css({
			"width" : "1200px",
			"margin" : "0 auto"
		});
		$("head").append("<style>div.nav_level_two_wrapper.fixed{left: 0 !important; right: 0 !important;}</style>");
	}
});
