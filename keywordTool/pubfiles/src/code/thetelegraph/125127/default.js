integration.meta = {
	'sectionID' : '125127',
	'siteName' : 'Telegraph - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '775270',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1008,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -12
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"height" : "inherit"
		});
		$("html").css({
			"overflow-x" : "visible"
		});
	}
});
