integration.meta = {
	"sectionID" : "125219",
	"siteName" : "Four Four Two Main Site",
	"publisher" : "haymarket",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1360]
};

integration.params = {
	'mf_siteId' : '681795',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1100,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "leaderboard, fby-tab-8261, block-hcm-ads-mpu1",
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#main-menu").css({
			"max-width" : "973px"
		});
		$(".top-background").css({
			"background-color" : "transparent",
			"box-shadow" : "none"
		});
		$("header, #footer-wrapper, #navigation").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$("#page").css({
			"margin-top" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
	$("head").append("<style>.close #InSkinBrowser0_x span {margin-right: 0px !important; position: static !important; background-color: transparent !important;}</style>");
	$("head").append("<style>.close #InSkinBrowser0_x, .close #InSkinBrowser0_c {margin-right: 0px !important;}</style>");
	$("head").append("<style>#leaderboard{display: none !important;}</style>");
	$("head").append("<style>.top-contain{width: 1100px !important; margin: 0 auto; display: block;}</style>");
});

integration.on("layoutChange", function(e) {
	$("head").append('<style id="ismResize"></style>');
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.on("layoutChange", function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "99999"
	});
});

integration.custom.ismResize = function() {
	var width = $(window).width();
	var sideWidth = (width - 1100) / 2;
	$("#newsletter-prompt").css({
		"right" : sideWidth
	});
	$("#ismResize").html("#feedbackify .fby-tab-r{right: " + (sideWidth) + "px !important;}")
}

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/8527/HCM_Passbacks/442_Inskin_Passback', [1120, 250]).display();\n<\\script>";
};
