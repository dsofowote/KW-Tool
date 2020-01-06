integration.meta = {
	"sectionID" : "124748",
	"siteName" : "Kanews",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707634',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#fullcontainer").css({
			"padding" : "0px"
		});
		$('head').append('<style>.plista_widget_slide {display: none !important;}</style>');	  
		
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
	}
});
