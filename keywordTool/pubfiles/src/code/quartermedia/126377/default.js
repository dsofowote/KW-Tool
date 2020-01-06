integration.meta = {
	'sectionID' : '126377',
	'siteName' : 'Emotion - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708130',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".l-footer").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
	}
});
