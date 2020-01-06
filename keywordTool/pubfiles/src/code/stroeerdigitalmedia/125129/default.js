integration.meta = {
	"sectionID" : "125129",
	"siteName" : "Goal.com/de",
	"publisher" : "haymarket",
	"platform" : "tablet"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '707247',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "leaderboard, fby-tab-8261, block-hcm-ads-mpu1",
	'plr_StartScrollOnAnchor' : true
};

function setWindow() {
    return currentWindow.top;
}

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var leaderboardHeight = $('.widget-ad-masthead--active').height();
		var headerHeight = $('.widget-header__wrapper.clearfix').height();
		var TotalHeight = leaderboardHeight + headerHeight + 30;
		$("head").append("<style>.ad-leaderboard{display: none !important;}</style>");
		console.log(headerHeight);
		if ($("body .widget-ad-masthead--active").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body .widget-ad-masthead--active");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -TotalHeight
			});
		} else {
			$("<div id='inskinanchor'></div>").insertBefore("body .widget-ad-masthead");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight - 30
			});
		}

		TotalHeight = leaderboardHeight + headerHeight;

		$(".ism-frame").parent().css({
			"z-index" : "10"
		});
		if ($("body .widget-ad-masthead--active").length == 1) {
			$("#inskinanchor").css({
				"margin-top" : TotalHeight
			});
		} else {
			$("#inskinanchor").css({
				"margin-top" : "80px"
			});
		}

		$(".widget-ad-masthead--active+.widget-header+.ad-leaderboard:not([data-empty]):not(.premium-takeover)").css({
			"margin" : "0"
		});
		$(".widget-header--top").css({
			"height" : "0"
		});
		$(".page-container").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$("html, body").css({
			"overflow-x" : "visible"
		});
		$(".ad-leaderboard, .leaderboard-extra, .widget-footer").css({
			"width" : "980px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$(".module-header, .top-section, .main-section, .module-navigation, .module-ad, .module-section > div, .module-footer").css({
				"margin-left" : "0px"
			});
			$(".page-container").css({
				"margin" : "0"
			});
			$(".ad-leaderboard, .leaderboard-extra, .widget-footer").css({
				"margin" : "0"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	var headerHeight = $('.widget-header__wrapper').height();
	$(window).scroll(function() {
		integration.base.setCfg({
			plr_ScrollAdjustment : headerHeight
		});
	});
});