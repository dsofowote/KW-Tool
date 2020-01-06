integration.meta = {
	"sectionID" : "124829",
	"siteName" : "Allgemeine Zeitung Uelzen &amp; Altmark Zeitung &amp; Isenhagener Kreisblatt ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '759435',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_],",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".id-SiteWrap").css({
			"margin" : "0 auto"
		});
		$(".id-Advert--posWallpaperSuperbanner").css({
			"height" : "0"
		});
	}
}); 