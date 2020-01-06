integration.meta = {
	"sectionID" : "124360",
	"siteName" : "Gizmodo",
	"publisher" : "future",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {

	'mf_siteId' : '681720',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_Responsive" : true,
	"plr_PageWidthAdjustment" : -44,
	'plr_PageHeightAdjustment' : -120,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : 2,
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
		$(".commercial--leaderboard").css({
			"display" : "none"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("body > #header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > #header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$(".site-container, .site-footer__content, .site-container__header-wrapper").css({
				"margin-left" : "0px"
			});

			$(".site-container__header").css({
				"margin-left" : "-20px"
			});
			$(".future-cookie-bar").css({
				"padding-left" : "0px",
				"padding-right" : "0px",
				"width" : "980px"
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
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_Gizmodo/Inskin\", [728, 90]).display();\n<\\script>";
};
