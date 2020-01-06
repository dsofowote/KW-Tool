integration.meta = {
	'sectionID' : '128394',
	'siteName' : 'Focus Times HK - Tablet - ( HK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008687',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1210,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#outer-wrapper").css({
			"top" : "-20px",
			"position" : "relative"
		});

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#outer-wrapper").css({
				"margin-left" : "0px"
			});
		}
	}
});
