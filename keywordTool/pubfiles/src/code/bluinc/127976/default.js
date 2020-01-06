integration.meta = {
	'sectionID' : '127976',
	'siteName' : 'Glam - (Creative Approval) - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '961596',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>div#om-r4nil1sl61rphzj9{right: 25% !important;} #ad-leaderboard{margin: 10px auto;}</style>");
	}
});

