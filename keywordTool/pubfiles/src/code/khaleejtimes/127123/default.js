integration.meta = {
	'sectionID' : '127123',
	'siteName' : 'Khaleej Times - Desktop - INT ex MENA  ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707788',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style>.cbp-spmenu-push-toright .stick_menu {left:190px !important;}</style>');
		$('head').append('<style>.menubg:not(.stick_menu) {left:0px !important;}</style>');
		$('head').append('<style>.cbp-spmenu-push:not(.cbp-spmenu-push-toright) .stick_menu {left:0px !important;}</style>');

		$('#fixed_width > div:nth-child(1)').css({
			'max-width' : '1150px',
			'margin' : '0 auto'
		});

		$("#topBar, .logo_bg, .menubg, .footer_sec_1, .footer_sec_2").css({
			"max-width" : "1150px",
			'margin' : "0 auto",
			'left' : "0",
			'right' : "0"
		});

		$(".main_content_bg.photo_gallery_bg, .banner_ads_blackbg").css({
			"max-width" : "1150px",
			'margin' : "0 auto"
		});

		$(".menubg").css({
			'left' : "0",
			'right' : "0"
		});
	}
});

/* Passback Tag
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1251894/Inskin-Dummy-300x250', [300, 250]).display();\n<\\script>";
};*/
