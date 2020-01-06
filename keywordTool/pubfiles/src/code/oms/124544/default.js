integration.meta = {
	"sectionID" : "124544",
	"siteName" : "News.de",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '707863',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1040,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], bc_mainVideo_thumb, [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".wrapper").css({
			"margin-left" : "0px",
			"padding" : "10px 0 0 0"
		});
		$("#dynSkyContainer").css({
			"display" : "none"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});
