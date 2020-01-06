integration.meta = {
	'sectionID' : '125881',
	'siteName' : 'Techradar',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.telemetry.setup({
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {
	'desktop_resolution' : [1232]
};

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707334',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 972,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "advertBlock"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".primary-nav, #document-footer, #main, #dfp_advert_4").css({
			"max-width" : "970px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [1, 1]).display();\n<\\script>";
};