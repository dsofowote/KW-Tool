integration.meta = {
	'sectionID' : '126378',
	'siteName' : 'Emotion - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707572',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.sticky-top{width: 25% !important}</style>");
		$(".panel-pane").css({
			"max-width" : "100%"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".l-page").css({
				"max-width" : "960px"
			});
		}
	}
});
