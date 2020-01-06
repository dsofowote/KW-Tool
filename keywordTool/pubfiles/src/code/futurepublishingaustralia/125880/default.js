integration.meta = {
   'sectionID' : '125880',
   'siteName' : 'PCGamer',

   'platform' : 'tablet',
   'restrictions' : 'iOS 7+ only (responsive)'
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




integration.testParams = {};

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707373',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_Responsive" : true,
	"plr_PageWidthAdjustment" : -54,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "nav-container"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$("body").addClass("pageSkinDisplayed");
		$(".dfpAd.adunit-page-.leaderboard_ad").first().addClass("pageSkinDisplayed");
		var specialCSS;
			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

				integration.base.setCfg({
					plr_PageAlignment : "left"
				});

				specialCSS = "<style type='text/css'>";
				specialCSS += "body.pageSkinDisplayed #main {margin-left: 0px !important;}";
				specialCSS += "body.pageSkinDisplayed footer {max-width: 970px !important; margin-left: 0px !important;}";
				specialCSS += "body.pageSkinDisplayed nav {max-width: 970px; margin: 0 auto; margin-left: 0px}";
				specialCSS += ".pageSkinDisplayed .dfp-leaderboard-container {display : none;};"
				specialCSS += "</style>";

				$("head").append(specialCSS);
				$("#leaderboard_ad").hide();

			} else {
				specialCSS = "<style type='text/css'>";
				specialCSS += ".pageSkinDisplayed #leaderboard_ad, .pageSkinDisplayed .dfp-leaderboard-container {display : none;}";
				specialCSS += "body.pageSkinDisplayed {background-image: none;} .pageSkinDisplayed #wide_container {padding-top : 0px;}";
				specialCSS += ".pageSkinDisplayed #footer_container, .pageSkinDisplayed #logo_bar_container,.pageSkinDisplayed nav{";
				specialCSS += "max-width : 970px; margin : 0 auto;}";
				specialCSS += ".pageSkinDisplayed .page-wrapper .page-inner #container {padding-top : 0px;}";
				specialCSS += "</style>";

				$("head").append(specialCSS);
				$("#leaderboard_ad").hide();

			}
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_PC_Gamer/Inskin\", [728, 90]).display();\n<\\script>\n";
};
