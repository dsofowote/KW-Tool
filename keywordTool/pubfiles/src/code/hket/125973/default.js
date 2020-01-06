integration.meta = {
	'sectionID' : '125973',
	'siteName' : 'U Know - Desktop',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1210,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("<div style='clear:both;'></div>").insertAfter("#footer");
		$("#top_bg_").css({
			"max-width" : "1210px",
			"margin" : "0 auto"
		});
		$("#footer").css({
			"max-width" : "1210px",
			"margin-left" : "auto",
			"margin-right" : "auto",
			"float" : "none",
			"position" : "relative"
		});
	}
});
