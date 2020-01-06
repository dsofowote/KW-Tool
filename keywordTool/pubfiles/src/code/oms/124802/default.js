integration.meta = {
	"sectionID" : "124802",
	"siteName" : "Passauer Neue Presse",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706421',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_], em_tab_weather",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$('#em_site_container').css({
		'padding-right' : '0px'
	});
	$('#em_ad_superbanner, #em_adserver_src_super').hide();
});
