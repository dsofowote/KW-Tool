integration.meta = {
	"sectionID" : "124296",
	"siteName" : "Techradar",
	"publisher" : "future",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {

	'mf_siteId' : '681811',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 972,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_AnchorParent" : "#main",
	"plr_StartScrollOnAnchor" : true,
	"plr_PageHeightAdjustment" : -44,
	"plr_FastInit" : true,
	'plr_ScrollAdjustment' : 40
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}
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
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [728, 90]).display();\n<\\script>";
};
