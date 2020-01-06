integration.meta = {
	"sectionID" : "124805",
	"siteName" : "mein s�dhessen",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706427',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$("#wrap").css({
		"padding-left" : "10px"
	});
	$("#feedback, .adLeaderboard").hide();
});
