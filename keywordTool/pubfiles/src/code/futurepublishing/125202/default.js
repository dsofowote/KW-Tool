integration.meta = {
	"sectionID" : "125202",
	"siteName" : "Kotaku",
	"publisher" : "future",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {

  'mf_siteId': '681754',

	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_Responsive" : true,
	"plr_PageWidthAdjustment" : -54,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	'plr_FastInit' : true
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "999999"
	});
	$(".future-cookie-bar").css({
		"z-index" : "1000"
	});
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".site-container > .commercial--leaderboard").css({
			"margin" : "0",
			"height" : "0"
		});
		if ($("#header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter('#header-wrapper');
			integration.base.setCfg({
				plr_AnchorParent : '#inskinanchor'
			});
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});

			$(".site-container__header group").css({
				"margin-left" : "-20px"
			});

			$(".site-container, .site-footer__content, .site-container__header-wrapper, .future-company-footer__wrapper").css({
				"margin-left" : "0px"
			});

			$(".future-cookie-bar").css({
				"padding-left" : "0px",
				"padding-right" : "0px",
				"width" : "970px"
			});
			$("body").css({
				"width" : "auto",
				"background-image" : "none"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_Kotaku/Inskin\", [728, 90]).display();\n<\\script>";
};
