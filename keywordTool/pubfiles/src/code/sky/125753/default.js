integration.meta = {
   'sectionID' : '125753',
   'siteName' : 'Sky News -  (CREATIVE APPROVAL)-  Desktop -  (INT ex UK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706555',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_URLKeywords" : 1,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByClass" : "ad",
	'plr_PageScanExclude' : ' #nav-wrap, .sdc-news-footer, .ob-widget-section '
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#cookie-notice, .header, .ad--leaderboard, .shine--generic, .sdc-news-footer").css({
			"max-width" : "1010px",
			"margin" : "0 auto"
		});
		$(".ad--leaderboard").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skynews\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
};

