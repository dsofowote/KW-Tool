integration.meta = {
	'sectionID': '128888',
	'siteName': 'Daily Mail USA  - Tablet - ( US )',
	'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1040614',
	"plr_UseCreativeSettings": true,
	"plr_UseFullVersion": true,
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_ContentW": 984,
	"plr_PageAlignment": "center",
	"plr_HideElementsByID": "",
	"plr_HideElementsByClass": "channel_mpu_wrapper,adHolder,billboard",
	"plr_URLKeywords": 2,
	"plr_FastInit": true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background": "none",
			"overflow-x": "visible",
		});
		$("#top.page-banner").css({
			"padding-top": "0px"
		});
		$(".billboard_wrapper").hide();
		$("#js-sky-right, #js-sky-left").hide()
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			$('#top').css({
				'margin-left': '20px'
			});
			integration.base.setCfg({
				plr_PageAlignment: 'left'
			});
			/* Required to over-ride important rule added by publisher */
			$('head').append('<style>body{margin-left:20px !important}</style>');
			$('head').append('<style>.page-banner {margin-left:3px !important}</style>');
		}
		/* CSS Changes requested by the publiser */
		var specialCSS = '<style type="text/css">.adHolder sticky_banner_overrides { height: 0; margin:0; }';
		specialCSS += '#stickyBanner { display:none; }';
		specialCSS += '#superBanner { display:none; }';
		specialCSS += '#sky_right_bottom { display:none!important; }';
		specialCSS += '.banner-adverts { display:none; }';
		specialCSS += '.page-banner { padding-top: 0px !important; }';
		specialCSS += '</style>';
		$('head').append(specialCSS);
		/* End of CSS Changes requested by the publisher */
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=5fd97cb6-d76c-4f78-a444-90da13e5dab8\"><\\script>";
};