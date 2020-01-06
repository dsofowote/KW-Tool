integration.meta = {
	'sectionID' : '125630',
	'siteName' : 'Autocar - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	
	'mf_siteId' : '707820',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#container").css({
				"margin-left" : "5px"
			});
			$("body > .wrap, #skip-link > a").css({
				"max-width" : "970px",
				"margin-left" : "5px"
			});
			$("#cookieBanner").css({
				"max-width" : "970px",
				"bottom" : "0px",
				"top" : "initial"
			});
			
		}
	}
});
