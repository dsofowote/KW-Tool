integration.meta = {
	'sectionID' : '126500',
	'siteName' : 'La Parisienne - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707077',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 998,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 0,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.header--sticky{top: 0 !important;}</style>");
		$("head").append("<style>.header--sticky .header__container, .header, .footer{max-width: 1000px !important; margin: 0 auto; left: 0; right: 0;}</style>");
		$('#footer, #main, #footer-parisien, .cookie-banner, .footer-squid').css({
			'max-width' : '998px',
			'margin' : '0 auto'
		});
		$('#outer-main').css({
			'margin-top' : '10px'
		});
	}
});

