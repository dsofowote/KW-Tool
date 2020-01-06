integration.meta = {
	'sectionID' : '128484',
	'siteName' : 'AlloCine - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1017679',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 76
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});
