integration.meta = {
	'sectionID' : '126021',
	'siteName' : 'Asahi - Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707241',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#Header, #Footer").css({
			"max-width" : "1024px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#Contents, #TopicsBar, #HometopAd, #PagebottomAd").css({
				"max-width" : "1024px",
				"margin-left" : "0px"
			});
			$("#Header, #Footer").css({
				"margin-left" : "0px"
			});
		}
	}
});
