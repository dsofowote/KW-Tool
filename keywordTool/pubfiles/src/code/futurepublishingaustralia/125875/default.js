integration.meta = {
	'sectionID' : '125875',
	'siteName' : 'Gamesradar',

	'platform' : 'desktop',
	'restrictions' : ''
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

integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707737',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 970,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad]",
	"plr_HideElementsByClass" : "ad_wrap",
	"plr_StartScrollOnAnchor" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* We need to add everything with classes so we can remove the CSS when PageSkin is unloaded */
		$("body").addClass("pageSkinDisplayed");
		var specialCSS = "<style>";
		specialCSS += ".pageSkinDisplayed #dfp_advert_1-wrapper, .pageSkinDisplayed .dfp-leaderboard-container {display : none;}"
		specialCSS += ".pageSkinDisplayed #document-footer {max-width : 970px !important; margin : 0 auto; }";
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("body > .primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : "-67px"
			});
		}
		$("head").append(specialCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
	integration.custom.servedinskin = 1;
	if (integration.custom.clearinskin && integration.custom.clearinskin == 1) {
		window.clearInSkin();
	};
	try {
		window.inSkinServed();
	} catch(e) {
	}
});

window.clearInSkin = function() {
	integration.custom.clearinskin = 1;
	if (integration.custom.servedinskin && integration.custom.servedinskin == 1) {
		window.InSkin.$("body").removeClass("pageSkinDisplayed");
		integration.base.unloadAd();
		integration.telemetry.recordCustom('PageSkin unloaded');
	}
}
/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\"> googletag.pubads().definePassback(\"/10518929/Passback_GamesRadar/Inskin\", [1, 1]).display();\n<\\script>";
};