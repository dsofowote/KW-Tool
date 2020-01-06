integration.meta = {
	"sectionID" : "125473",
	"siteName" : "NON UK Daily Mail",
	"publisher" : "dailymail",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706389',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "channel_mpu_wrapper,adHolder,billboard",
	"plr_URLKeywords" : 2
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#billBoard").css({
			"height" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#top').css({
				'margin-left' : '20px'
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			/* Required to over-ride important rule added by publisher */
			$('head').append('<style>body{margin-left:20px !important}</style>');
		}
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
