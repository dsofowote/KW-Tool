integration.meta = {
	'sectionID' : '125728',
	'siteName' : 'FuerSie',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706444',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#site, #footer").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$("ul.menu").css({
			"right" : "auto"
		});
		$(".meta-navigation .menu li").css({
			"margin-left" : "-10px",
			"margin-right" : "-10px",
			"background-color" : "white"
		});
		$("li.last.leaf a").css({
			"top" : "-90px",
			"left" : "900px"
		});
	}
});
