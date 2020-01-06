integration.meta = {
	"sectionID" : "124885",
	"siteName" : "Deister und Weserzeitung ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706332',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"padding-left" : "0px"
		});
		$("#site").css({
			"width" : "1000px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
		$("#banner, #container_banner_wallpaper").css({
			"height" : "0px"
		});
		$(".nfy-outer").css({
			"max-width" : "1020px"
		});
		$("#container_banner").hide();
	}
});
