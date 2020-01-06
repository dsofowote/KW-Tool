integration.meta = {
	'sectionID' : '127710',
	'siteName' : 'Journal Du Net - Desktop - (BE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '838820',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > div.ccmcss_offcanvas_1 > div > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > div.ccmcss_offcanvas_1 > div > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -70
			});
		}
		$("body > div.ccmcss_offcanvas_1 > div > footer").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
	}
});
