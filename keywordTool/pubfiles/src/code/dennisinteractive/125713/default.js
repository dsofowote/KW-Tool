integration.meta = {
	'sectionID' : '125713',
	'siteName' : 'Den Of Geek - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681789',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#header-group").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-group");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -52,
			});
		}
		$("body").css({
			"overflow" : "visible"
		});
		$("#block-menu-menu-trending > p").css({
			"left" : "auto",
			"right" : "50%"
		});
		$("#__ic-notice").css({
			"width" : "100%"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("#page, .social-menu-span, #menu-group, #footer-group, #site-menus, #footer-wrapper, #block-dennis-core-dennis-core-footer, #block-dfp-skin, #dfp-ad-billboard_leaderboard_1, .featured-variable-results, #block-views-homepage-latest-block, #dfp-ad-billboard_leaderboard_2, #dfp-ad-billboard_leaderboard_3, #block-views-homepage-latest-block>*, #block-dennis-core-dennis-core-footer>*").css({
				"max-width" : "1190px",
				"width" : "1190px",
				"margin-left" : "5px"
			});
			$("#block-menu-menu-trending > footer, #footer-wrapper").css({
				"max-width" : "1200px",
				"width" : "100%",
				"margin-left" : "5px"
			});
			$(".social-menu-span, #menu-group, #footer, #footer-group, #footer, #footer-wrapper").css({
				"width" : "1200px",
				"margin-left" : "5px"
			});
			$("#footer #block-dennis-core-dennis-core-footer").css({
				"width" : "1200px",
				"max-width" : "1200px",
				"margin-left" : "-5px"
			});
			$("#footer-wrapper").css('margin-left', '0px');
			$("head").append("<style>.node-full .group-content-body .group_left_sidebar {margin-left: -100px !important;}</style>");
			$("head").append("<style>#pre-page * {max-width: 10px !important;}</style>");
			integration.custom.isEdge = true;
		} else {
			$("#page, .social-menu-span, #menu-group, #footer-group, #site-menus, #footer-wrapper, #block-dennis-core-dennis-core-footer, #block-dfp-skin, #dfp-ad-billboard_leaderboard_1, .featured-variable-results, #block-views-homepage-latest-block, #dfp-ad-billboard_leaderboard_2, #dfp-ad-billboard_leaderboard_3, #block-views-homepage-latest-block>*").css({
				"max-width" : "1190px",
				"width" : "1190px",
				"margin" : "0 auto"
			});
			$("#block-menu-menu-trending > footer, #footer-wrapper").css({
				"max-width" : "1200px",
				"width" : "100%",
				"margin" : "0 auto"
			});
			$(".social-menu-span, #menu-group, #footer, #footer-group, footer, #footer").css({
				"width" : "1200px",
				"margin-left" : "0px"
			});
			$("#footer #block-dennis-core-dennis-core-footer").css({
				"width" : "1200px",
				"max-width" : "1200px"
			});
			$("#footer-wrapper").css('margin', 'auto');
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	if (integration.custom.isEdge) {
		$("#header-group").css({
			"left" : "0",
			"margin-left" : "0",
			"width" : "calc(100% + " + integration.custom.FrameSide + "px)"
		});
	}
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
	$(".dfp-tag-wrapper>*").css({
		"max-width" : "1190px"
	});
	var width = $(window).width();
	var sideWidth = width / 2;
	$("head").append("<style>#block-dennis-newsletter-newsletter-block .block-dennis-newsletter-bottom{left: " + (sideWidth - 100) + "px !important;}</style>");

});
