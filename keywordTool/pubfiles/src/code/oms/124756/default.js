integration.meta = {
	"sectionID" : "124756",
	"siteName" : "Nordbayerischer Kurier",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706354',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1170,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$("body").css({
		"margin-top" : "0px"
	});
	$("#skyscraper_omsv").css({
		"margin-left" : "100px"
	});
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});
