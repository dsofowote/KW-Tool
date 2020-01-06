integration.meta = {
	"sectionID" : "124882",
	"siteName" : "Der Teckbote",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706572',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "custom",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1,
	"plr_FramePositionCSS" : "margin:0 auto;right:189px",
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#container_banner").css({
			"height" : "0px",
			"min-height" : "auto"
		});
		$("#container").css({
			"min-width" : "960px"
		});
		$(".nfy-inner").css({
			"margin-top" : "0px"
		});
		$("#head_right_side").css({
			"padding" : "30px 115px 0 0"
		});
	}
});
