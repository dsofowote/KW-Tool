integration.meta = {
	'sectionID' : '125578',
	'siteName' : 'Womens Agenda',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1266]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1006,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'header',
	'plr_GetContentHeightVersion' : 2,
	'plr_HideElementsByClass' : 'advertisement'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* This is to centre the content within PageSkin */
		$("#guttered").css({
			"margin-left" : "-5px"
		});
	}
});
integration.on('adServed', function(e) {
	/* Raise Z-index above skyscrapers. Remove conflicting code from PageSkin div. */
	$(".ism-frame").parent().css({
		"z-index" : "12",
		"filter" : "initial"
	});
});
