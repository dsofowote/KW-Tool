integration.meta = {
	"sectionID" : "124913",
	"siteName" : "Goslarsche Zeitung ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706319',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 920,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#leaderboard_1{display: none !important;}</style>");
		$("#container_banner").css({
			"height" : "auto"
		});
		$(".footerOuter").css({
			"width" : "920px",
			"margin" : "0 auto"
		});
		$("#footer").css({
			"width" : "900px"
		});
	}
});
