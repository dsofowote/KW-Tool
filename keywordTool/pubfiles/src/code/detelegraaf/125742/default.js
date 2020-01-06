integration.meta = {
	'sectionID' : '125742',
	'siteName' : 'DeTelegraaf',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'window-load' : true,
	'custom' : true
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707547',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1160,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 75
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {
			};
		};

		if ($(".hidden--on-headers-switch").next().length == 1) {
			var element = $(".hidden--on-headers-switch").next();
			$("<div id='inskinanchor'></div>").insertAfter(element);
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -30
			});
		}

		$("#adbar_top").css({
			"padding-top" : "10px"
		});

		var element = $(".hidden--on-headers-switch").next();
		$(element).css({
			"margin" : "auto"
		});
		$(".article-page-breadcrumbs").css({
			"max-width" : "1160px",
			"margin" : "auto"
		});

		$("head").append("<style>footer{max-width: 1160px !important; margin: auto !important;}</style>");
		$("head").append("<style id='ismFixedHeader'>{}</style>");

		$("head").append("<style>.header-large .headroom--scrolled .__header-headroom, .section-header, .large-header-side-margins{margin-left: 0; margin-right: 0;}</style>");
		$("head").append("<style>.headroom-wrapper{height: auto !important;}</style>");

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#wrapper").css({
				"margin-left" : "0px"
			});
			$(".header-large .headroom--scrolled .__header-headroom, .headroom--scrolled .section-header").css({
				"max-width" : "100%"
			});
			integration.custom.isEdge = true;
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	integration.custom.headerScroll();
	$(window).on("scroll", function() {
		integration.custom.headerScroll();
	});

	$(".usabilla_live_button_container").css({
		"right" : integration.custom.FrameSideRight
	});

	if (integration.custom.isEdge == true) {
		$("main").css({
			"margin-left" : "0",
			"margin-right" : integration.custom.FrameSideRight
		});
	}
});

integration.custom.headerScroll = function() {
	if ($(window).scrollTop() >= integration.custom.FrameTop) {
		var headerTop = 0;
	} else {
		var headerTop = integration.custom.FrameTop - $(window).scrollTop();
	}
	$("#ismFixedHeader").html(".headroom--scrolled{top: " + headerTop + "px;} .headroom--unpinned.headroom--scrolled{top: 0px;}");
}
