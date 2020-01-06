integration.meta = {
	"sectionID" : "124045",
	"siteName" : "Techradar",
	"publisher" : "future",
	"platform" : "desktop"
};



integration.testParams = {
	"desktop_resolution" : [1232]
};

integration.params = {

	'mf_siteId' : '681842',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 972,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "advertBlock",
	"plr_AnchorParent" : "#main",
	"plr_StartScrollOnAnchor" : true,
	"plr_PageHeightAdjustment" : -105,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}

		$(" #document-footer, #main").css({
			"max-width" : "970px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});

		if ($("nav.primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("nav.primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$(".dfp-leaderboard-container, .slot-lightbox1").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [728, 90]).display();\n<\\script>";
};
