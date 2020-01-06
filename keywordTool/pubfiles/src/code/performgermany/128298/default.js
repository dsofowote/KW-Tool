integration.meta = {
	'sectionID' : '128298',
	'siteName' : 'Goal DE - Tablet - ( DE )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1001494',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var leaderboardHeight = $(".widget-ad-masthead--active").height();
		var headerHeight = $(".widget-header__wrapper").height();
		var TotalHeight = leaderboardHeight + headerHeight;
		if ($("body .widget-ad-masthead--active").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body .widget-ad-masthead--active");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -TotalHeight
			})
		} else {
			$("<div id='inskinanchor'></div>").insertBefore("body .widget-ad-masthead");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			})
		}
		$(".widget-ad-masthead--active+.widget-header+.ad-leaderboard:not([data-empty]):not(.premium-takeover)").css({
			"margin" : "0"
		});
		$("head").append("<style>.widget-header--top{height: 0 !important;}</style>");
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
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$(".module-header, .top-section, .main-section, .module-navigation, .module-ad, .module-section > div, .module-footer").css({
				"margin-left" : "0px"
			});
			$(".page-container").css({
				"margin" : "0"
			});
			$(".ad-leaderboard, .leaderboard-extra, .widget-footer").css({
				"margin" : "0"
			})
		}
	}
});

integration.on("layoutChange", function(e) {
	var headerHeight = $(".widget-header__wrapper").height();
	$(window).scroll(function() {
		integration.base.setCfg({
			plr_ScrollAdjustment : 0
		})
	})
});

integration.on("adServed", function(e) {
	var leaderboardHeight = $(".widget-ad-masthead--active").height();
	var headerHeight = $(".widget-header__wrapper").height();
	var TotalHeight = leaderboardHeight + headerHeight;
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
	if ($("body .widget-ad-masthead--active").length == 1) {
		$("#inskinanchor").css({
			"margin-top" : TotalHeight
		})
	} else {
		$("#inskinanchor").css({
			"margin-top" : headerHeight
		})
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Goal_Responsive/ROS/SKIN\" height=\"1\" width=\"1\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
