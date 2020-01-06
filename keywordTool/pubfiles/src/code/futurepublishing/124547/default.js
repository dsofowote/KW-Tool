integration.meta = {
	"sectionID" : "124547",
	"siteName" : "Games Radar",
	"publisher" : "future",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {

  'mf_siteId': '681798',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_StartScrollOnAnchor" : true,
	"plr_ContentW" : 970,
	"plr_PageAlignment" : "center",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}
		/* We need to add everything with classes so we can remove the CSS when PageSkin is unloaded */
		$("body").addClass("pageSkinDisplayed");
		var specialCSS = "<style>";
		specialCSS += ".pageSkinDisplayed #dfp_advert_1-wrapper, .pageSkinDisplayed .dfp-leaderboard-container {display : none;}"
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("body > .primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : "-67px"
			});
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			specialCSS += ".pageSkinDisplayed .primary-nav {margin-left : -20px;}";
			specialCSS += ".pageSkinDisplayed #main, .pageSkinDisplayed #dfp_advert_1-wrapper, .pageSkinDisplayed .dfp-leaderboard-container {max-width : 970px; margin-left : 0px; }";
			specialCSS += ".pageSkinDisplayed #document-footer {max-width : 970px !important; margin-left : 0px; }";
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		} else {
			specialCSS += ".pageSkinDisplayed #document-footer {max-width : 970px !important; margin : 0 auto; }";
		}
		$("head").append(specialCSS);
	}
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
	try {
		window.inSkinServed();
	} catch(e) {
	}
});
window.clearInSkin = function() {
	integration.base.unloadAd();
	$("body, .dfpAd.adunit-page-.leaderboard_ad").removeClass("pageSkinDisplayed");
	integration.telemetry.recordCustom('PageSkin unloaded');
}
/* Passback Tag*/

window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_GamesRadar/Inskin\", [728, 90]).display();\n<\\script>";
};
