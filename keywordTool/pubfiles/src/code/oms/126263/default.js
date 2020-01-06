integration.meta = {
	'sectionID' : '126263',
	'siteName' : 'WochenblÃ¤tter Desktop',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721755',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 940,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".container, #footer-wrap").css({
			"margin-left" : "0"
		});
		$("#footer").css({
			"margin-left" : "20px"
		});
	}
});

integration.on('adServed', function(e) {
	$("#oms_gpt_skyscraper").hide();
}); 