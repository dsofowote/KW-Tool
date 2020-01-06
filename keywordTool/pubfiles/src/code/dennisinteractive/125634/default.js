integration.meta = {
	'sectionID' : '125634',
	'siteName' : 'Expert Reviews - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706582',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2,
	"plr_ScrollAdjustment" : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#snap-content, #block-dennis-core-dennis-core-footer, #header-group, #header-group-inner, #main-menu").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.page-header{max-width: 1220px !important;}</style>");
		$("#secondary-menu").css({
			"width" : "auto"
		});
		$("#page").css({
			"min-width" : "1200px"
		});
		$("#footer").css({
			"max-width" : "1200px",
			"padding-left" : "5px",
			"padding-right" : "5px"
		});
		$("#header-group").css({
			"position" : "relative"
		});
		$("body").css({
			"padding-top" : "0",
			"overflow" : "visible"
		});
		$("#block-dennis-core-dennis-core-footer").css({
			"width" : "100%"
		});
		$("head").append("<style>#block-monetizer101-monetizer101-sticky{z-index: 999999999999 !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#snap-content, #block-dennis-core-dennis-core-footer, #header-group, #header-group-inner, #main-menu, #secondary-menu, #main, #page, #footer, #site-menus").css({
				"margin-left" : "0"
			});
			$("#header-group").css({
				"position" : "relative"
			});
			$("body").css({
				"padding-top" : "0"
			});
			$("head").append("<style>#main{margin-left: 10px !important;}</style>");
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$("head").append("<style>#feedbackify #fbya #fbyb .fby-tab-r .fby-tab-scale{margin-right: " + integration.custom.FrameSideRight + "px !important;}</style>");

	$(".block-dennis-newsletter-bottom.show").css({
		"transform" : "translate(" + (integration.custom.FrameSide + 10) + "px)"
	});

	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var cwidth = $(window).width() - (integration.custom.FrameSideRight + integration.custom.FrameSide);
	$("#site-menus").css({
		"max-width" : cwidth,
		"margin" : "auto"
	});
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000000000"
	});
});
