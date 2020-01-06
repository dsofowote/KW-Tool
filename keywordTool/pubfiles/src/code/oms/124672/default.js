integration.meta = {
	"sectionID" : "124672",
	"siteName" : "Rh�n und Saalepost",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706279',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#loginContainer").hide();
		$("#omsv_sky_DhtmlLayer, .advertSkyScraper").css({
			"margin-left" : "320px"
		});
	}
});

integration.on("adServed", function(e) {
	$("#page").css({
		"margin-left" : "0px",
		"min-width" : "960px"
	});
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
	$("#loginContainer").show();
});
