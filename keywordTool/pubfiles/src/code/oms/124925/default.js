integration.meta = {
	"sectionID" : "124925",
	"siteName" : "Gifhorner Rundschau ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706563',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#superbanner>table").css({
			"height" : "auto"
		});
	}
});
