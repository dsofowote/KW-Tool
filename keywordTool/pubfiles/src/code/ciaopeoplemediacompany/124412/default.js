integration.meta = {
	"sectionID" : "124412",
	"siteName" : "Fanpage",
	"publisher" : "ciaopeople",
	"platform" : "desktop"
};

integration.telemetry.setup({ 
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706144',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1204,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-], [id^=google_ads_div_]",
	"plr_HideElementsByClass" : "",
	"plr_PageAlignment" : "center",
	"plr_FastInit" : true
};

integration.on("adServed", function(e) {
	$('.footer').css({
		'width' : '1200px',
		'margin' : '0 auto'
	});
	$('.ism-frame').parent().css({
		'z-index' : '11'
	});
	$("body").css({
		"padding-top" : "0px"
	});
});
