integration.meta = {
	"sectionID" : "124954",
	"siteName" : "MacWorld SE",
	"publisher" : "idg",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707377',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1020,
	"plr_PageHeightAdjustment" : -49,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_RemoveElementsByClass" : "adContainer"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style>#wrapper {margin: 0 auto !important;}</style>');
	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css('top', '49px');
});
