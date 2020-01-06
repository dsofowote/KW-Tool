integration.meta = {
	"sectionID" : "124571",
	"siteName" : "PC Gamer",
	"publisher" : "future",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {

	'mf_siteId' : '681689',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "upper_mpu_container,lower_mpu_container,leaderboard_ad",
	'plr_FastInit' : true
};

integration.on("adServed", function(e) {
	$(".slot-lightbox1").hide();
	$("head").append("<style>body.pageSkinDisplayed #ISMFrame {z-index : 1000021;} header .nav-container{z-index : 1000022 !important}</style>");
	$("head").append("<style>body.pageSkinDisplayed .page-wrapper .page-inner #container{max-width : 970px !important;}</style>");
	$(".ism-frame").parent().attr("id", "ISMFrame");

	/*$("html").addClass("PageSkinDisplayed");
	 $("#footer_container").css({
	 "max-width" : "970px",
	 "margin" : "0 auto"
	 });*/
	$("#wide-container").css({
		"max-width" : "970px",
		"margin" : "0 auto"
	});
	$("#document-footer").css({
		'max-width' : '970px',
		"z-index" : "9"
	});
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

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}

		if ($("body > nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -61,
			});
		}

		/* We need to add everything with classes so we can remove the CSS when PageSkin is unloaded */
		$("body").addClass("pageSkinDisplayed");
		$(".dfpAd.adunit-page-.leaderboard_ad").first().addClass("pageSkinDisplayed");
		var specialCSS = "<style>";
		specialCSS += ".pageSkinDisplayed #leaderboard_ad, .pageSkinDisplayed .dfp-leaderboard-container, .pageSkinDisplayed.dfpAd.adunit-page-.leaderboard_ad {display : none;}"
		specialCSS += ".pageSkinDisplayed #wide_container {padding-top : 0px !important;}"
		specialCSS += ".pageSkinDisplayed #footer_container, .pageSkinDisplayed #logo_bar_container {";
		specialCSS += "max-width : 970px; margin : 0 auto;}";
		specialCSS += "body.pageSkinDisplayed .page-wrapper .page-inner #container {padding-top : 0px;}";
		specialCSS += "}</style>";
		$("head").append(specialCSS);
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
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_PC_Gamer/Inskin\", [728, 90]).display();\n<\\script>";
};
