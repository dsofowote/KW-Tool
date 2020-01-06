integration.meta = {
	'sectionID' : '128359',
	'siteName' : 'Femme Actuelle - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1007014',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header, #corps, #cookieconsent").css({
			"width" : "1170px",
			"margin" : "0 auto"
		});
		$(".header .top-row .logo-section").css({
			"padding-left" : "5px",
			"padding-right" : "17px"
		});

	}
});
