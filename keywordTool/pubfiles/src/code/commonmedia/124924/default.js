integration.meta = {
	"sectionID" : "124924",
	"siteName" : "Hochzeits Plaza",
	"publisher" : "commonmedia",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1024,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "google_ads_div_HPlaza-Startseite-ContentAd-oben_ad_wrapper",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$("#deco_wrapper, body").css({
		"background-image" : "none"
	});
	$("#footer_ribbon").css({
		"background-color" : "transparent"
	});
	$(".ism-frame").parent().css({
		"z-index" : "25"
	});
});
