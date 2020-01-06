integration.meta = {
	'sectionID' : '127074',
	'siteName' : 'Sky News - (Publisher Bookings) Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707400',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_URLKeywords" : 1,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByClass" : "ad"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"max-width" : "1010px",
			"margin" : "0 auto"
		});
		$(".ad--leaderboard").hide();
		$(".sdc-site-au--full-bleed").hide();
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.Scroll();
	$(window).scroll(function() {
		integration.custom.Scroll();
	});
});

integration.custom.Scroll = function() {
	if ($(".sdc-article-sibling-links--sticky-top").length == 1) {
		integration.base.setCfg({
			plr_ScrollAdjustment : 72
		});
	} else {
		integration.base.setCfg({
			plr_ScrollAdjustment : 0
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skynews\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
};
