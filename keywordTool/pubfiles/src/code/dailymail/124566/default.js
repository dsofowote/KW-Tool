integration.meta = {
	"sectionID" : "124566",
	"siteName" : "Daily Mail",
	"publisher" : "dailymail",
	"platform" : "tablet"
};

integration.testParams = {};

integration.channelHome = [
   '/home/index.html',
   '/news/index.html',
   '/ushome/index.html',
   '/sport/index.html',
   '/tvshowbiz/index.html',
   '/auhome/index.html',
   '/femail/index.html',
   '/health/index.html',
   '/sciencetech/index.html',
   '/money/index.html',
   '/video/index.html',
   '/travel/index.html',
   '/mailonsunday/index.html',
   '/home/latest/index.html',
   '/home/you/index.html'
];

integration.params = {
	'mf_siteId' : '681676',
	'plr_FastInit' : true,
	// 'plr_PageScanExclude' : '.beta, #mini-carousel-wrapper, #infinite-list, #most-read-news-wrapper, #reader-comments, #taboola-below-main-column, #most-watched-videos-wrapper, #p-17, #taboola-below-article-thumbnails-2nd, script,.nav-primary, .and-footer, .page-footer',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "channel_mpu_wrapper,adHolder,billboard",
	"plr_URLKeywords" : 2,
	"plr_BarneyThresholdClicks" : 1,
	"plr_BarneyThresholdRate" : 1,
	'plr_PageScanExclude' : ' .and-footer, .footer, .page-footer, .page-header, .beta, #comments, #infinite-list, .taboola, #wideCommentAdvert '
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#top').css('margin-left', '20px');
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			/* Required to over-ride important rule added by publisher */
			$('head').append('<style>body{margin-left:20px !important;}</style>');
		}
		$("body").css("overflow", "visible");
		/* CSS Changes requested by the publiser */
		var specialCSS = '<style type="text/css">.adHolder sticky_banner_overrides { height: 0; margin:0; }';
		specialCSS += '#stickyBanner { display:none; }';
		specialCSS += '#superBanner { display:none; }';
		specialCSS += '.banner-adverts { display:none; }';
		specialCSS += '.page-banner { padding-top: 0px !important; }';
		specialCSS += '</style>';
		$('head').append(specialCSS);
		/* End of CSS Changes requested by the publisher */
	}
});

integration.on("adServed", function(e) {
	$("head").append("<style>.ism-frame{z-index: 1000 !important;}</style>");
});
