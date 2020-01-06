integration.meta = {
	'sectionID' : '127529',
	'siteName' : 'Tech Radar US - (Tablet) - (US)',
	'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734995',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_AnchorParent" : "#main",
	"plr_StartScrollOnAnchor" : true,
	"plr_PageHeightAdjustment" : -44,
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(" #document-footer, #main, #dfp_advert_4").css({
			"max-width" : "970px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});

		$(".dfp-leaderboard-container").hide();
		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#document-footer, #main, #dfp_advert_4").css({
				"margin-left" : "0px"
			});
			$(".primary-nav").css({
				"margin-left" : "-20px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [728, 90]).display();\n<\\script>";
};
