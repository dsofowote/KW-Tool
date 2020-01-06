integration.meta = {
	"sectionID" : "124673",
	"siteName" : "Mittelhessen",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706431',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 974,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "custom",
	"plr_FramePositionCSS" : "margin: 0 auto; border-right: transparent solid 16px;",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$("#container_border").css({
		"padding-left" : "0px"
	});
	$("#container_outer").css({
		"width" : "auto",
		"float" : "none",
		"max-width" : "none"
	});
	$("#container_banner").hide();
	$("#footer").css({
		"margin" : "0 auto"
	});

});
