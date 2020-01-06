integration.meta = {
	"sectionID" : "124884",
	"siteName" : "Der Patriot",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706478',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1170,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

	}
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});
