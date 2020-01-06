integration.meta = {
	"sectionID" : "125041",
	"siteName" : "Echo-live",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1202,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_GetContentHeightVersion" : 2,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".banner_horizontal").css({
			"height" : "auto"
		});
		$("body").css({
			"width" : "auto"
		});
		$(".wrapper, .header").css({
			"max-width" : "1202px",
			"margin" : "0 auto"
		});
		$("head").append("<style>body.sticks{ padding-top: 0;} body.sticks > .wrapper{padding-top: 253px;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.frtop = e.data.plr_FrameTop;
	$("#seite").css({
		"top" : frtop
	});
});

