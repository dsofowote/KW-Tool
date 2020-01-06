integration.meta = {
	'sectionID' : '127592',
	'siteName' : 'Illife - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '761752',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".slab--commercial, .slab--masthead, .slab--primary-navigation, .slab--leaderboard, footer").css({
			"width" : "990px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.slab--leaderboard {width:990px !important;}</style>");
		$(".slab--leaderboard").css({
			"left" : "0px",
			"right" : "0px"
		});
	}
});
