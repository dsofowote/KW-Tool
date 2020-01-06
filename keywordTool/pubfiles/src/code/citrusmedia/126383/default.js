integration.meta = {
   'sectionID' : '126383',
   'siteName' : 'Women\'s Fitness - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#wrapper, .header-bottom").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		$(".container").css({
			"width" : "100%"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("#mobile-menu").css({
		"margin-top" : integration.custom.FrameTop
	});
});