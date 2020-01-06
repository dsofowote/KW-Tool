integration.meta = {
	'sectionID' : '125821',
	'siteName' : 'Elle Spain',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 985,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#superHeader2, #bandaNegra").css({
			"max-width" : "985px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#mainWrapper").css({
				"max-width" : "985px",
				"margin-left" : "0px"
			});
		} else {
			$("#mainWrapper").css({
				"max-width" : "985px",
				"margin" : "0 auto"
			});
		}
	}
});
