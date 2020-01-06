integration.meta = {
	"sectionID" : "124753",
	"siteName" : "L�becker Nachrichten",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707620',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$('body').css({
		'padding-bottom' : '0px'
	});
	$('#seite').css({
		'padding-bottom' : '20px',
		"margin-left" : "10px"
	});
});
