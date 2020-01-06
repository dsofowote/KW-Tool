integration.meta = {
	"sectionID" : "125165",
	"siteName" : "Daily Mail - Publisher bookings",
	"publisher" : "dailymail",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	
	
	'mf_siteId' : '707488',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "channel_mpu_wrapper,adHolder,billboard",
	"plr_URLKeywords" : 2
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#top').css({
				'margin-left' : '20px'
			});
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
