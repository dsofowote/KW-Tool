integration.meta = {
	'sectionID' : '128943',
	'siteName' : 'Le Rugbynistere - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1043081',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$(".back-top").css({
			"right" : integration.custom.FrameSideRight + 10
		});
		$('#app').css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style>header:after{position: relative;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#app').css({
				"margin" : "0"
			});
		}
	}
});
