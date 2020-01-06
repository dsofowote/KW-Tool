integration.meta = {
	'sectionID' : '128428',
	'siteName' : ' Premiere - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1012568',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header").css({
			"left" : "0px",
			"right" : "0px"
		});

		var windowWidth = $(window).width();
		var contentWidth = integration.params.plr_ContentW;
		var sides = windowWidth - contentWidth;
		console.log(sides, contentWidth);
		$("#at4-share").css({
			"margin-right" : (sides / 2),
			"margin-top" : "116px"
		});
	}
});
