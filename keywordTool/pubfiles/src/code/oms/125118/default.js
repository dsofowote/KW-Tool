integration.meta = {
	'sectionID' : '125118',
	'siteName' : 'General Anzeiger Bonn - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707617',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".page").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$(".site-header-content").css({
			"max-width" : "980px",
		});
		$("head").append("<style>.page-content, .ad-superbanner.container, .site-header-content .container{max-width: 980px !important; width: 980px !important;}</style>");
		$(".page-main").css({
			"width" : "100%"
		});
		$(".ad-skyscraper").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".page").css({
				"margin-left" : "0"
			});
			$("body").css({
				"width" : "auto"
			});
		}
	}
});