integration.meta = {
	"sectionID" : "125002",
	"siteName" : "Leonberger Kreiszeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '707306',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#container").css({
			"margin-left" : "10px"
		});
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		$('head').append('<style type="text/css">#superbanner {margin-left: auto !important; margin: 0 auto;}</style>');
		$('[data-layout="desktop"] .site').css({
			"padding-left" : "0",
			"margin" : "0 auto"
		});
	}
});
