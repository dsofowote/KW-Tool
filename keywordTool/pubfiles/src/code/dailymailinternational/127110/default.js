integration.meta = {
	'sectionID' : '127110',
	'siteName' : 'Daily Mail - Tablet - Middle East',
	'platform' : 'tablet'
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '707947',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "channel_mpu_wrapper,adHolder,billboard",
	'plr_PageScanExclude' : '.nav-primary, .and-footer, .page-footer',
	"plr_URLKeywords" : 2,
	"plr_FastInit" : true
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

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/5765/dailymail.uk\" height=\"250\" width=\"970\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
