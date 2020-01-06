integration.meta = {
	"sectionID" : "124666",
	"siteName" : "Th�ringen Allgmeine",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '721054',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$('head').append('<style>#com-navigation {position: relative !important;}</style>');
	$("#content_holder").css({
		"width" : "980px"
	});
});
