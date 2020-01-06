integration.meta = {
	'sectionID' : '126448',
	'siteName' : 'Evening Telegraph - PageSkin - (UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706803',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -100,
	'plr_URLKeywords' : 2,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#sso-login-bar").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#sso-login-bar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -32,
			});
		}
		$('.site-footer').css({
			'width' : '980px',
			'margin' : '0 auto',
			'padding-bottom' : '60px',

		});
		$('.sharing-bar').css({
			'max-width' : '980px',
			'margin' : 'auto'
		});
		$('#sailthru-dialog').css({
			'max-width' : '1200px',
			'margin-left' : '-600px',
			'left' : '50%'
		});
		$('div.sharedaddy').css({
			'position' : 'initial'
		});
		$('head').append('<style type="text/css">.billboard, .billboard-ad, .block--advertising{ display:none !important;} html{background-color: #fff !important;}</style>');
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/evening-telegraph-passbacks/ET-inskin_passbacks', [[2, 2], [970, 250], [300, 250]]).display();\n<\\script>";
};
