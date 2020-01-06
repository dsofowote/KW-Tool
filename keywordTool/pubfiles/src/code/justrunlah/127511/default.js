integration.meta = {
	'sectionID' : '127511',
	'siteName' : 'Just Run Lah - Tablet - (Asia)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '731274',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1068,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#td-outer-wrap, .td-header-menu-wrap, .td-search-wrap-mob").css({
			"max-width" : "1068px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#td-outer-wrap").css({
				"margin-left" : "0"
			});
			$("#wpfront-notification-bar").css({
				"max-width" : "1068px"
			});
			integration.custom.isEdge = true;
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(".sfm-navicon-button").css({
		"margin-left" : integration.custom.FrameSide,
		"top" : integration.custom.FrameTop
	});
	if(integration.custom.isEdge == true) {
		$("#wpfront-notification-bar").css({
			"margin-left" : integration.custom.FrameSide
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});
