integration.meta = {
	"sectionID" : "124722",
	"siteName" : "Taunuszeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707523',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adServed", function(e) {
	$(".offsetwrapper").css({
		"margin-left" : "0px"
	});
	$("head").append("<style>#InSkinBrowser0_lnk0 {width: auto !important; height: auto !important}</style>");
});
