integration.meta = {
   'sectionID' : '125001',
   'siteName' : 'Stimmt - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707786',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1310,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#oms_gpt_superbanner, #oms_gpt_skyscraper").hide();
		$(".page").css({
			"margin-top" : "0"
		});
	}
});
