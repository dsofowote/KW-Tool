integration.meta = {
	"sectionID" : "124602",
	"siteName" : "Stuttgarter Zeitung online",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707385',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1002,
	"plr_PageAlignment" : "left",
	"plr_HideElementsByID" : "rectangle,[id^=google_ads_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("header, #wrapper").css({
			"margin-left" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').css({
		'z-index' : '5'
	});
});
