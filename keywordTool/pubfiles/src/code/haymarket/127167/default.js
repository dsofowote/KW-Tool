integration.meta = {
	'sectionID' : '127167',
	'siteName' : 'Campaign Asia - (Marketing Use Only) - Tablet - (ASIA) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707954',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -25
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("#container, .footerWrap, #footerWrap, #newMastHead").css({
			"margin" : "0 auto",
			"max-width" : "1220px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#container, .footerWrap, #footerWrap, #newMastHead").css({
				"margin-left" : "0px"
			});
		}

	}
}); 