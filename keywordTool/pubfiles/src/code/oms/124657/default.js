integration.meta = {
	"sectionID" : "124657",
	"siteName" : "Nordkurier",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707643',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1300,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$('#outwrap, body').css({
		'padding' : '0px'
	});
});
