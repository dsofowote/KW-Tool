integration.meta = {
	'sectionID' : '127684',
	'siteName' : 'Dance Charts - Desktop - (  DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '781433',
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'margin: 0 auto; border-right: transparent solid 200px;',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_GetContentHeightVersion' : 2,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#advert_superbanner").hide();
	}
});
