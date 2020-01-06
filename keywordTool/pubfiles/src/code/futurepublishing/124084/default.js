integration.meta = {
	"sectionID" : "124084",
	"siteName" : "Games Radar",
	"publisher" : "future",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {

	'mf_siteId' : '681782',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 970,
	"plr_StartScrollOnAnchor" : true,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad]",
	"plr_HideElementsByClass" : "ad_wrap",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
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
		specialCSS += ".pageSkinDisplayed #dfp_advert_1-wrapper, .pageSkinDisplayed .dfp-leaderboard-container{display : none;}"
		specialCSS += ".pageSkinDisplayed #document-footer {max-width : 970px !important; margin : 0 auto; }";
		$('body').append('<style>.slot-lightbox1{display:none !important}</style>');
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

	integration.telemetry.recordCustom("Browser Resolution (WxH) - " + wW + "px X " + wH + "px");

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
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_GamesRadar/Inskin\", [728, 90]).display();\n<\\script>";
};
