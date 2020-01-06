integration.meta = {
	'sectionID' : '126940',
	'siteName' : 'Times of India - Desktop - (INT ex UK, MENA, ASIA)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707124',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1011,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#navigation, #header, #footer, .sticky, .ad728, .article_divider').css({
			"max-width" : "1011px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
	}
});
