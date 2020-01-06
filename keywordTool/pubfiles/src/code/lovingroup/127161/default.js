integration.meta = {
	'sectionID' : '127161',
	'siteName' : ' Lovin Dublin - Desktop- (IE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};




integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708018',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -60,
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.l-site .c-hero{width: 1100px !important;}</style>");
		var headerheight = $(".header").height();
		if ($("body > .header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -60
			});
		}
		$("#inskinanchor").css({
			"margin-top" : headerheight
		});
		$(".l-site, .l-wrapper").css({
			"margin" : "0 auto",
			"padding-top" : "0px",
			"max-width" : "1100px"
		});

	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/85456319/LovinDublin_Landing_Leaderboard', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};
