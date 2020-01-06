integration.meta = {
	'sectionID' : '128429',
	'siteName' : 'Premiere - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1012569',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header").css({
			"left" : "0px",
			"right" : "0px"
		});

		$(".at-share-dock.atss").css({
			
		})

		var windowWidth = $(window).width();
		var contentWidth = integration.params.plr_ContentW;
		var sides = windowWidth - contentWidth;
		console.log(sides, contentWidth);
		$("#at4-share").css({
			//"margin-right" : (sides / 2),
			//"margin-top" : "116px",
			"margin" : "0 auto",
			"max-width" : contentWidth
		});
		
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
