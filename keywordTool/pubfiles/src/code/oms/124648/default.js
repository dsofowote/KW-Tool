integration.meta = {
	"sectionID" : "124648",
	"siteName" : "M�rkische Oderzeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706536',
	"plr_UseCreativeSettings" : true,
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1090,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_GetContentHeightVersion" : 2
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"padding-left" : "0"
		});
	}
}); 