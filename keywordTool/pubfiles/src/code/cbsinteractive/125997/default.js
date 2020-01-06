integration.meta = {
	'sectionID' : '125997',
	'siteName' : 'Metacritic - Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	
	'mf_siteId' : '706657',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#site_layout").append("<div style='clear:both'></div>");
		
		$("#mastfoot, #masthead").css({
			"max-width" : "1024px",
			"margin" : "0 auto"
		});
		
		$("#mastfoot").css({
			"float" : "none"
		});
		
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#gutters").css({
				"margin" : "0px"
			});

			$("#mastfoot").css({
				"max-width" : "1024px",
				"margin-left" : "0"
			});
			
			$("#site_layout").css({
				"max-width" : "1024px"
			});
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
