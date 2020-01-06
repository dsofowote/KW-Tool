integration.meta = {
	"sectionID" : "124890",
	"siteName" : "D�lmener Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706725',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page-content").css({
			"margin" : "0 auto"
		});
		$("#footer, #top-position").css({
			"min-width" : "1000px",
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("#footer-position").css({
			"width" : "1000px"
		});
	}
});
