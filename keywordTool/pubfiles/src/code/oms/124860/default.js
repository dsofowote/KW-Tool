integration.meta = {
	"sectionID" : "124860",
	"siteName" : "Solinger Tageblatt",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1344]
};

integration.params = {
	'mf_siteId' : '707260',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".id-SiteWrap").css({
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
	}
});
