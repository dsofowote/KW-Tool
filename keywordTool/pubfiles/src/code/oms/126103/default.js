integration.meta = {
	'sectionID' : '126103',
	'siteName' : 'SchwÃ¤bische Post Desktop',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706509',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1102,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#oms_gpt_skyscraper, #oms_gpt_superbanner").hide();
		$("#pagecontainer").css({
			"padding-right" : "0",
			"top" : "0"
		});
		$(".page-banner-wrapper").css({
			"max-width" : "1102px",
			"margin" : "0 auto",
			"padding" : "0"
		});		
	}
});
