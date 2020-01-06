integration.meta = {
	"sectionID" : "125543",
	"siteName" : "TheSportsBible",
	"publisher" : "65twenty",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1540]
};

integration.params = {

  'mf_siteId': '681817',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1280,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByClass" : "[id^=dfp-]",
	"plr_HideElementsByID" : "leader-ad-unit",
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -108,
				"plr_StartScrollOnAnchor" : true
			});
		}
		$(".article__next-up, .advert, .takeover, .category__banner, footer, .carousel--ondark").css({
			"margin" : "0 auto",
			"max-width" : "980px"
		});
		$("head").append("<style>body{padding-top: 0 !important;} div.advert{position: relative !important;} body > header{margin-bottom: 0px !important;}</style>");
		$("html").addClass("skin__opt--three  skin__opt--three-collapsed");
		$("head").append("<style>.inskin-article-body{width: calc(100% - 340px - 50px);}</style>");
		$(".article__container").css({
			"max-width" : "980px"
		});
		// fix for social media icons
		$("head").append("<style>.skin__opt--three .share-controls--sticky .share-controls, .skin__opt-three-collapsed .share-controls--sticky .share-controls{width: 5% !important;} .skin__opt--three .share-controls--sticky.share-controls__container--bottom .share-controls {width: 24.75% !important;}</style>");
		$("head").append("<style>.container.share-controls__container.share-controls--sticky {max-width: 980px !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.articleBody();
	$(window).on("resize", function() {
		integration.custom.articleBody()
	})
});

integration.custom.articleBody = function() {
	var winWidth = $(window).innerWidth();
	if (winWidth >= 1263) {
		$(".article__body").addClass("inskin-article-body")
	} else {
		$(".article__body").removeClass("inskin-article-body")
	}
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1200"
	})
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback('/8493129/Passback_TSB_Landscape_1',[[728, 90], [970, 250]]).setTargeting(\"passback\", \"Inskin-TSB-UK-Desktop-SL1\").display();\n<\\script>";
};
