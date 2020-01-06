integration.meta = {
	"sectionID" : "124541",
	"siteName" : "Frankfurter Rundschau",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706252',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "BillboardAd, ContentAd",
	"plr_HideElementsByClass" : "BillboardAd, AutoHideAd, AdvertorialTeaser, bc_mainVideo_thumb",
	"plr_GetContentHeightVersion" : 2,
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 0
};

integration.on("adServed", function(e) {
	$("#All").css({
		"position" : "static"
	});
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".bannerRightAd").css({
			"margin-left" : "160px"
		});
	}
});
