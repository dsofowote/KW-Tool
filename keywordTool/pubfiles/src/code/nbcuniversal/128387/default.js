integration.meta = {
	'sectionID' : '128387',
	'siteName' : 'E! Online - (Narrow Template) - Desktop - (UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1008163',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".leaderboard").css({
			"max-width" : "980px",
			"margin" : "auto"
		});
		$(".nav__adbanner").hide();
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "8889"
	});
}); 