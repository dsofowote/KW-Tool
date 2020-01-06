integration.meta = {
	'sectionID' : '128023',
	'siteName' : 'Nine Lifestyle Network - (CREATIVE APPROVALS) - Tablet - ( AU )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '969213',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#ninemsn-global-header, .site-header, #ninemsn-global-footer, .header-module__inner, .header-wrapper, .shortcuts").css({
			"max-width" : "1040px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#ninemsn-global-header, .header-module__inner, .site-header, #ninemsn-global-footer, .header-wrapper, .shortcuts, .container, .layout, .top-takeovers").css({
				"margin" : "0"
			});
			$("head").append('<style>.header-module.js-stuck .header-module__inner{left: 20px !important;}</style>');
		}
	}
});
