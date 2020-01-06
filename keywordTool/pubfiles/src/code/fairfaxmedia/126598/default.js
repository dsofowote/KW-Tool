integration.meta = {
	'sectionID' : '126598',
	'siteName' : 'Essential Baby - Tablet - (AU) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1028287',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 996,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"width" : "996px",
			"margin" : "0 auto"
		});

		$("head").append("<style>.persistent-on #nav--secondary{width: 996px !important; margin: 0 auto; left: 0; right: 0 !important;}</style>");
		$("head").append("<style>.persistent-on #nav{width: 1056px !important; margin: 0 auto; left: 0 !important; right: 0 !important;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body{margin: 0 0 0 20px !important;} .persistent-on #nav--secondary{margin: 0; left: 20px !important;}</style>");
		}
	}
}); 