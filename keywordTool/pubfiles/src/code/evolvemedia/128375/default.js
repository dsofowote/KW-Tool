integration.meta = {
	'sectionID' : '128375',
	'siteName' : 'The Fashion Spot - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1007233',
	'plr_PageAlignment' : 'center',
	'plr_ContentW': 1290,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".header-menu-container").css({"padding-left":"0px"});
		$(".social-share").css({"margin-right":"0px"});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			$(".wrapper").css({
				"margin" : "0px"
			});
			$("header").css({
				"left" : "-10px",
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
  var headHeight = $('header').height();
	$(".ism-anchor").css({
		"top" : headHeight,
    "z-index": 100
	});
		integration.base.setCfg({
			plr_PageHeightAdjustment : -headHeight
		});
});
