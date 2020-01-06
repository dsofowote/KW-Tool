integration.meta = {
	'sectionID' : '126261',
	'siteName' : 'Goodnews 4 Baden-Baden Desktop',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708057',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".outline").css({
			"padding-top" : "0"
		});
	}
});

integration.on('adServed', function(e) {
	$("#omsv_sky_DhtmlLayer, #oms_gpt_superbanner").hide();
}); 