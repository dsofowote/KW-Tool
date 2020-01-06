integration.meta = {
	'sectionID' : '127528',
	'siteName' : 'Tech Radar US - (Desktop) - (US)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734994',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_PageHeightAdjustment" : -105,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}
		
		$("#document-footer, #main, #dfp_advert_4").css({
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
		
		$(".dfp-leaderboard-container").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [728, 90]).display();\n<\\script>";
};