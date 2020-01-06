integration.meta = {
	'sectionID' : '125781',
	'siteName' : 'CNN',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".pg-wrapper, footer").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$(".l-container, footer").css({
			"padding-left" : "5px",
			"padding-right" : "5px",
		});
		$(".nav .logo").css({
			"height" : "75px"
		});
	}
});
