integration.meta = {
	'sectionID': '128977',
	'siteName': 'Monopol - Tablet - ( AT CH DE )',
	'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1044273',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 980,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_FastInit': true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('#page-wrapper').css({
			"max-width": "960px",
			"margin": "0 auto"
		});

		$("body, html").css({
			"height": "initial"
		});

		$("head").append('<style>#animation-logo-start-wrapper{display: none !important;}</style>');

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment': 'left'
			});
			$('#page-wrapper').css({
				"margin-left": "10px"
			});
		}
	}
});