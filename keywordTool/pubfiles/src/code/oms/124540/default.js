integration.meta = {
	"sectionID" : "124540",
	"siteName" : "AugsburgerAllgemeine",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706750',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "ad_load_superbanner, aside, [id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "ateaser, anzeige_rec",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0,
	'plr_FastInit': true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("footer").css({
			"position" : "relative",
			"margin" : "0 auto",
			"max-width" : "1024px",
		});
		$("header.b-header").css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("#az_weba").hide();
		$("#page").css({
			"margin" : "0px 10px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").css({
		"z-index" : "501"
	});
});
