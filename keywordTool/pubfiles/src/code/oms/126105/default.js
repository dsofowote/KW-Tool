integration.meta = {
	'sectionID' : '126105',
	'siteName' : 'Hildesheimer Allgemeine Zeitung Desktop',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706867',
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
		$("#banner, #omsv_sky_DhtmlLayer").hide();
		$("#mitte, .cc_container").css({
			"max-width" : "960px"
		});
		$("#inhalte").css({
			"margin-top" : "30px"
		});
		$(".cc_container").css({
			"position" : "relative",
			"margin" : "0 auto"
		});
	}
});
