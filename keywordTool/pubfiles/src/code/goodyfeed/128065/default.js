integration.meta = {
	'sectionID' : '128065',
	'siteName' : 'Goody Feed  - Tablet - ( SG )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973479',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1164,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.custom.isEdge = true;
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".td-container").css({
				"margin-left" : "10px",
				"width" : "1144px"
			});
			$(".td-search-wrap-mob").css({
				"max-width" : "1164px"
			});
			$("head").append("<style>.td-header-wrap{margin-left: 0px !important;}</style>");
			$("head").append("<style>body, #designthree{max-width: 1164px !important;}</style>");
		}
		$(".td-header-wrap, .td-header-menu-wrap").css({
			"max-width" : "1164px",
			"margin" : "auto"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(".sticky_social").css({
		"max-width" : "1164px",
		"left" : integration.custom.FrameSide
	});
	var pageHeightAdjust = 0 - $(".sticky_social").outerHeight();
	integration.base.setCfg({
		'plr_PageHeightAdjustment' : pageHeightAdjust
	});
	integration.custom.ismNavScroll();
	$(window).on("scroll", function() {
		integration.custom.ismNavScroll();
	});
	integration.custom.ismSideNav();
	$(".toast.pull-left").on("click touchstart", function() {
		integration.custom.ismSideNav();
	});
	if (integration.custom.isEdge == true) {
		$("head").append("<style>body{margin-left: " + integration.custom.FrameSide + "px !important;}</style>");
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11"
	});
});

integration.custom.ismNavScroll = function() {
	if ($(window).scrollTop() > integration.custom.FrameTop) {
		var navTop = 0;
	} else {
		var navTop = integration.custom.FrameTop - $(window).scrollTop();
	}
	$("#headerwrap").css({
		"top" : navTop,
		"max-width" : "1164px",
		"left" : integration.custom.FrameSide
	});
}

integration.custom.ismSideNav = function() {
	setTimeout(function() {
		$("#sidebar").attr("aria-hidden", "true");
	}, 100);
}

