integration.meta = {
	'sectionID' : '125971',
	'siteName' : 'U Food - Desktop',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706651',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".uk-sticky-placeholder").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});
		$(".container").css({
			"padding-left" : "0",
			"padding-right" : "0"
		});
		$(".FloatAd-container").css({
			"margin-top" : "10px"
		});
		integration._addPixel();    
	}
});
