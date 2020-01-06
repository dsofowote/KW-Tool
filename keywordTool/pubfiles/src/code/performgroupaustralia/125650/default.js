integration.meta = {
	"sectionID" : "125650",
	"site" : "Goal AU",
	"product" : "PageSkin",
	"platform" : "tablet",
	"restrictions" : "iOS 7+ only (responsive)"
};

integration.testParams = {
};

integration.telemetry.setup({
	'url' : true,
});
integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707485',
	"plr_PageAlignment" : "center",
	'plr_ContentW' : 980,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_UseCreativeSettings" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	'plr_PageHeightAdjustment' : -80,
	'plr_ForceFrameBottom': 0,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".widget-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".widget-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("html, body").css({
			"background-image" : "none",
			"overflow-x" : "visible"
		});
		$(".page-wrapper").css({
			"max-width" : "1024px",
			"margin" : "0 auto"
		});
		$(".module-transfer-talk").css({
			"visibility" : "visible"
		});
		$(".home-sidebar").css({
			"height" : "500px"
		});
		$(".ad-leaderboard").css({
			"display" : "none"
		});
		$(".mr-gutters").css({
			"margin-top" : "0.9375rem"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("head").append("<style>.ad-leaderboard, .page-container, .widget-footer{margin-left: 0 !important; max-width: 980px !important;}</style>");
		}
		$("body").append("<style>.module.module-ad.leaderboard, .leaderboard-extra{margin-left:0px !important}</style>");
		$(".module.module-ad.leaderboard, .leaderboard-extra").css({
			"width" : "980px"
		});
	}
});

integration.on('adServed', function(e) {
	var headHeight = $("header").outerHeight();
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});

	var leaderboardHeight = $('.widget-ad-masthead--active').outerHeight();
	if ($(".widget-ad-masthead--active").length == 1) {

		$(".ism-frame").parent().css({
			"top" : (headHeight + leaderboardHeight),
		});

		$(".page-container, .widget-footer").css({
			"top" : (headHeight + leaderboardHeight)
		});

		integration.base.setCfg({
			plr_PageHeightAdjustment : 0,
			plr_ScrollAdjustment : -leaderboardHeight
		});
	}
});
