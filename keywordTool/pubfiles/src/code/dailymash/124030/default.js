integration.meta = {
	'sectionID' : '124030',
	'siteName' : 'Daily Mash - Desktop - (UK)',
	'platform' : 'desktop'
};


integration.channelHome = [
   '/news.html',
   '/sport.html',
   '/politics.html',
   '/opinion.html',
   '/features/agony-aunt.html',
   '/features/horoscopes.html',
   '/mash-books.html',
   '/'
];

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
	'mf_siteId' : '681823',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "top-banner, mash-mpu1-widget-2, wysiwyg_widgets_widget-5, mash-mpu2-widget-2, php_widget-34, php_widget-18",
	"plr_HideElementsByClass" : "",
	"plr_URLKeywords" : 2,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	"plr_FastInit" : true,
	'plr_PageScanExclude' : "#sidebar, .TaboolaDesktop, .trc_rbox_container, #bottom_modules"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#ecd_opt_in_banner").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/4183072/DailyMash_InSkinDesktopPASSBACK_1x1', [1, 1]).display();\n<\\script>";
};
