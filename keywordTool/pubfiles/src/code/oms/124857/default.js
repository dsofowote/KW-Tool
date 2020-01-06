integration.meta = {
	"sectionID" : "124857",
	"siteName" : "Frankische Nachrichten ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706519',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1060,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "custom",
	"plr_FramePositionCSS" : "margin: 0 auto; right: 180px",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_GetContentHeightVersion" : 2,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#top-bannerrow").css({
			"height" : "auto"
		});
		$("#page").css({
			"padding-bottom" : "0px",
			"padding-left" : "0px",
			"padding-top" : "10px"
		});
	}
});
