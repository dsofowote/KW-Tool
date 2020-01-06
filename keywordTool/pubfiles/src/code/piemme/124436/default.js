integration.meta = {
	"sectionID" : "124436",
	"siteName" : "Leggo ",
	"publisher" : "piemme",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706195',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=aswift_],top_banner",
	//"plr_ScrollAdjustment" : 42
};

integration.on("adServed", function(e) {
	$("#socialbar, #outer-wrapper, #header-wide, #bottom-content").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/38681514/Leggo/HomePage/Skin', [1, 1]).display();\n<\\script>";
};
