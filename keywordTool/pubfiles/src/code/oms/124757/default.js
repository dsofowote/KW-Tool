integration.meta = {
   'sectionID' : '124757',
   'siteName' : 'MainPost - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706566',
	"srv_SectionID" : "124757",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_FrameTop" : 90,
	"plr_FrameSide" : 160,
	"plr_FrameBottom" : 90,
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#loginContainer").hide();
		$("#omsv_sky_DhtmlLayer, .advertSkyScraper").css({
			"margin-left" : "320px"
		});
		$("#ad_superbanner").hide();
	}
});

integration.on("adServed", function(e) {
	$("#loginContainer").show();
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
});
