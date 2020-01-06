integration.meta = {
	"sectionID" : "124811",
	"siteName" : "RheinNeckarZeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706564',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_GetContentHeightVersion" : 2,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#fullheadbanner").hide();
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"margin-left" : "0px"
	});
	$(window).trigger("resize");
});
