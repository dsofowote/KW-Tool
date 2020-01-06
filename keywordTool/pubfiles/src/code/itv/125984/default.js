integration.meta = {
	'sectionID' : '125984',
	'siteName' : 'ITV',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1160,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#inskinanchor',
	'plr_PageHeightAdjustment' : -100
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) { 
		if ($("nav.main-nav ").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("nav.main-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		integration.custom.isEdge = false;
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".itv-glob-nav__inner, .wrap, .content").css({
				"margin-left" : "0"
			});
			$("#itv-header-page-fragment, .main-nav ").css({
				"margin-left" : "-20px"
			});
			integration.custom.isEdge = true;
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.rightFrame = e.data.plr_FrameSideRight;
	$(".back-to-top").css({
		"margin-right" : integration.custom.rightFrame
	});
	if (integration.custom.isEdge) {
		var contentWidth = $(".content").width();
		var footerWidth = $(".itv-glob-foot__inner").width();
		$(".itv-glob-foot__inner").css({
			"margin-left" : (contentWidth - footerWidth) / 2
		});
	}
});
