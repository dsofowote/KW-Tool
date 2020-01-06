integration.meta = {
	"sectionID" : "124858",
	"siteName" : "Lipische Landeszeitung ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707288',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "nav-fixed, fa-search"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".container").css({
			"margin-top" : "0"
		});
	}
});
