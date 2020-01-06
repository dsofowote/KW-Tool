integration.meta = {
	"sectionID" : "124462",
	"siteName" : "OnVista",
	"publisher" : "onvistagroup",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1320]
};

integration.telemetry.setup({
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.params = {
	'mf_siteId' : '706215',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "ca_ad, CONTENT_AD",
	"plr_PageAlignment" : "center"
};

integration.on("adServed", function(e) {
	$(".MEGASIZE_BANNER").hide();
	$("#ONVISTA").css({
		"padding-top" : "0px"
	});
	$("#WALLPAPER").hide();
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
	$(".ism-frame, .ism-frame-inner, .ism-frame-unit").css({
		"margin-bottom" : "0px"
	});
});
