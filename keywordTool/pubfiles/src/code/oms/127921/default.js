integration.meta = {
	'sectionID' : '127921',
	'siteName' : ' Wolfenbuetteler Zeitung - Desktop - (DE) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '933197',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ad__superbanner").hide();
		$("head").append("<style>.omsv_sky_DhtmlLayer{z-index: 0 !important;}</style>");
	}
});
