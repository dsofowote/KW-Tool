integration.meta = {
	'sectionID' : '126118',
	'siteName' : 'GmÃ¼nder Tagespost - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '713736',
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
		$("#oms_gpt_superbanner, #oms_gpt_skyscraper").hide();
		$(".page-banner-wrapper").css({
			"padding" : "0",
			"width" : "960px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".page-banner-wrapper").css({
				"margin" : "0"
			});
			$("#pagecontainer").css({
				"margin-left" : "0px"
			});
		}
	}
});
