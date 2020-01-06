integration.meta = {
	'sectionID' : '125167',
	'siteName' : 'Woman Magazine - Desktop - ( UK )',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '681900',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
