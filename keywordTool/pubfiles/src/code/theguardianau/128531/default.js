integration.meta = {
	'sectionID' : '128531',
	'siteName' : 'The Guardian AU - Tablet- (AU) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1020906',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1300,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".js-top-banner").css({"display": "none"});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body{margin: 0 0 0 20px !important;}</style>");
		}
		$('body').css({
			"max-width" : "1300px",
			"margin" : "0 auto"
		});
	}
});
