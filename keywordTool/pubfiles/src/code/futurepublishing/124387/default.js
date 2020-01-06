integration.meta = {
	"sectionID" : "124387",
	"siteName" : "Gizmodo",
	"publisher" : "future",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1240]
};

integration.params = {

	'mf_siteId' : '681764',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	'plr_PageHeightAdjustment' : -120,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "commercial",
	"plr_URLKeywords" : 2,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").prepend("<style id='ISM_PS'>.site-footer, .future-company-footer{ max-width:980px; margin: 0 auto} body{ background-image: none !important } .commercial--leaderboard { display : none; } </style>")
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("body > #header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > #header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11"
	});

	$(window).resize(function() {
		if ($(".site-container").width() < 980) {
			integration.base.unloadAd();
			$("#ISM_PS").remove();
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_Gizmodo/Inskin\", [728, 90]).display();\n<\\script>";
};
