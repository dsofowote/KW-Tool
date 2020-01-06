integration.meta = {
	"sectionID" : "124645",
	"siteName" : "Ludwigsburger Kreiszeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706249',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#container_border").css({
			"padding" : "0",
			"max-width" : "950px"
		});
		$("#inhalte_superbanner").css({
			"height" : "auto",
			"text-align" : "center",
			"margin-top" : "10px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
