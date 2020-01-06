integration.meta = {
	"sectionID" : "124899",
	"siteName" : "Wochenspiegel",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706580',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1120,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_], skyscraper, superbanner, ads",
	"plr_HideElementsByClass" : "fullbanner"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header-container").css({
			"max-width" : "1120px"
		});
		$("#skyscraper").css({
			"display" : "none"
		});
	}
});

integration.on("adServed", function(e) {
	$("body").css({
		"background-image" : "none"
	});
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});
