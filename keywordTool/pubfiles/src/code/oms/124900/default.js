integration.meta = {
	"sectionID" : "124900",
	"siteName" : "RevierSport",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706531',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#spm-section-body-right{display: none !important;}</style>");
		$("#rs-site").css({
			"margin" : "0 auto"
		});

		$(".rs-superbanner").css({
			"min-height" : "0"
		});

		$(".rs-skyscraper").css({
			"height" : "auto"
		});

		$("#spm-section-body, #footer").css({
			"width" : "990px",
			"margin" : "0 auto",
			"padding" : "0"
		});

		$("body").css({
			"overflow-x" : "visible"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
