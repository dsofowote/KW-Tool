integration.meta = {
	"sectionID" : "125083",
	"siteName" : "Il Mattino",
	"publisher" : "piemme",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706602',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 994,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg",
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#socialbar .innerwrapper").css({
			"max-width" : "980px"
		});

		$("#left_arrow, #right_arrow").remove();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("#container, .pre-wrapper").css({
				"margin-left" : "0px"
			});
			$("#header-wrapper, #leaderboard-wrapper, .pre-wrapper, #footer, #quickmap-wrapper, #menu-wrapper").css({
				"margin-left" : "0px",
				"max-width" : "994px"
			});
			$("#menu-wrapper").css({
				"left" : "20px"
			});
			$("#socialbar").css({
				"width" : "994px"
			});
			$("body").css({
				"width" : "auto"
			});
		}
	}
});

integration.on("adServed", function() {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/38681514/Mattino/HomePage/Skin', [1, 1]).display();\n<\\script> ";
};
