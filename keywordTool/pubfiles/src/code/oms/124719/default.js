integration.meta = {
	"sectionID" : "124719",
	"siteName" : "Hoechster Kreisblatt",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706337',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$(".offsetwrapper").css({
		"margin-left" : "0px"
	});
	$("head").append("<style>#InSkinBrowser0_lnk0 {width: auto !important; height: auto !important}</style>");
});
