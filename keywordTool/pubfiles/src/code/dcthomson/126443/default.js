integration.meta = {
	'sectionID' : '126443',
	'siteName' : 'eveningexpress-desktop-(UK)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706829',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#sso-login-bar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#sso-login-bar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -96,
			});
		}
		$('.site-footer').css({
			'width' : '980px',
			'margin' : '0 auto',
			'padding-bottom' : '130px',

		});
		$('.sharing-bar').css({
			'max-width' : '980px',
			'margin' : 'auto'
		});
		$('head').append('<style type="text/css">.billboard, .billboard-ad, .block--advertising{ display:none !important;} </style>');
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.Scrolling();
	$(window).on('scroll', function() {
		integration.custom.Scrolling();
	});
});
integration.custom.Scrolling = function() {
	tTop = $(window).scrollTop();
	if (tTop > 50) {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : -100
		});
	} else {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : 0
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/evening-express-passbacks/EE-inskin_passbacks', [[2, 2], [300, 250], [970, 250]]).display();\n<\\script>";
};
