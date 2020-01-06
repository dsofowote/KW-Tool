integration.meta = {
	'sectionID' : '126003',
	'siteName' : 'Mail Online - Tablet - AU',

	'platform' : 'tablet',
	'restrictions' : ''
};



integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706633',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_PageScanExclude' : ' .and-footer, .footer, .page-footer, .page-header, .beta, #comments, #infinite-list, .taboola, #wideCommentAdvert '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#top').css('margin-left', '10px');
			/* Required to over-ride important rule added by publisher */
			$('head').append('<style>body{margin-left:20px !important;}</style>');
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
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
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});
/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/5765/dailymail.uk/dm_dminskinspassback\" height=\"250\" width=\"970\"></div>\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
