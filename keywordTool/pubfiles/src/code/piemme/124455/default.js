integration.meta = {
	'sectionID' : '124455',
	'siteName' : 'Ilmessaggero - Desktop - (IT)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706210',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 994,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style type="text/css">.left-menu-open body {margin-left: -16px !important}</style>');
		$('body #header, #bottom-content').css({
			"width" : "994px",
			"margin" : "0 auto"
		});

	}
});

integration.on('layoutChange', function(e) {
	$(window).scroll(function(e) {
		if ($(window).scrollTop() == 0) {
			integration.base.setCfg({
				"plr_ScrollAdjustment" : 0
			});
		} else {
			integration.base.setCfg({
				"plr_ScrollAdjustment" : 50
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/38681514/Messaggero/HomePage/Skin', [1, 1]).display();\n<\\script>";
};
