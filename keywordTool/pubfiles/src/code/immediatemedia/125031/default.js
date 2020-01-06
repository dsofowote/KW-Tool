integration.meta = {
	"sectionID" : "125031",
	"siteName" : "BBC Good Food",
	"publisher" : "immediatemedia",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1360]
};

integration.params = {

	'mf_siteId' : '681711',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1100,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "div-gpt-ad-leaderboard, ad-skyscraper, ad-mpu",
	"plr_PageHeightAdjustment" : -15,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("#footer").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$("#ad-leader").hide();

		$('div[id^="ad-manager-ad-leaderboard"], .ad--leaderboard, div[id^="ad-manager-ad-top_slot"').css({
			"height" : "0px",
			"min-height" : "0px",
			"margin" : "0px"
		});
		$("body").css({
			"background-image" : "none"
		});

		$("#scroller").css({
			"margin-top" : "-10px"
		});

		$(".ad.ad--top-slot").css({
			"margin" : "0px",
			"padding" : "0px"
		});

		$("#scroll-wrapper").css({
			"top" : "-10px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
	$("html, body").css({
		"overflow" : "visible"
	});
	integration.custom.PageSkinUnderNavBar();
});

integration.on("layoutChange", function(e) {
	$(window).resize(function() {
		integration.custom.PageSkinUnderNavBar();
	});
});

integration.custom.PageSkinUnderNavBar = function() {
	var width = $(window).width();
	if (width <= 755) {
		$(".ism-frame").parent().css({
			"top" : "50px"
		});
		InSkinObj.setCfg({
			plr_PageHeightAdjustment : -50
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "0"
		});
		InSkinObj.setCfg({
			plr_PageHeightAdjustment : 0
		});
	}
}
/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/bbcgoodfood-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n \n\tconsole.log(event);\n\nvar w = event.size[0];\nif(w==728)\n{\nself.frameElement.style.setProperty (\"width\", '728px');\nself.frameElement.style.setProperty (\"height\",'90px');\n}\n\n});\n\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/bbcgoodfood-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};
