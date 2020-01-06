integration.meta = {
	'sectionID' : '127577',
	'siteName' : 'CLEO - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '752181',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 1060)/2 + 30;
		$("#sticky-menu-container, .main-footer").css({
			"max-width" : "1060px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		$("#back-top").css({
				"right" : sideWidth
		});
	}
});
