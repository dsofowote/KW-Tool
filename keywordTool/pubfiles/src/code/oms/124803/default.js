integration.meta = {
	"sectionID" : "124803",
	"siteName" : "Waiblinger Kreiszeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '708023',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1200,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "custom",
	"plr_FramePositionCSS" : "margin:0 auto;",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#superbanner").parent().attr("id","ism-sbanner");
		$("head").append("<style>#ism-sbanner #superbanner{display: none !important;}</style>");

		$(".site").css({
			"padding-left" : "0",
			"margin" : "0 auto"
		});
	}
});
