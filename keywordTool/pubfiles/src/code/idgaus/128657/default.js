integration.meta = {
	'sectionID' : '128657',
	'siteName' : 'Goodgearguide.com - Tablet - ( AU NZ )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1028945',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1080,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body').css({
				"margin" : "0"
			});
		}
		$('body').css({
			"width" : "1080px",
			"margin" : "0 auto"
		});
	}
});
