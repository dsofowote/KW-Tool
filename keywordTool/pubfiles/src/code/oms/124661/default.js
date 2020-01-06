integration.meta = {
	"sectionID" : "124661",
	"siteName" : "Oberhessische Presse",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706355',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#oms_gpt_superbanner").hide();
		$("#header, #navigation, #hauptteil, #fuss").css({
			"min-width" : "960px"
		});
	}
}); 