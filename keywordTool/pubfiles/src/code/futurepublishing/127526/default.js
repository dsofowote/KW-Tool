integration.meta = {
   'sectionID' : '127526',
   'siteName' : 'Games Radar US - (Tablet) - (US)',
   'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734992',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
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
			$('head').append('<style type="text/css">body > div.placeholder {margin: 10px 0 !important;}</style>');
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

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/8644/Passback_GamesRadar/Inskin_US\", [728, 90]).display();\n<\\script>";
};
