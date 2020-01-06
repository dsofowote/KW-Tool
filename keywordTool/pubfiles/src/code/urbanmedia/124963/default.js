integration.meta = {
   'sectionID' : '124963',
   'siteName' : 'Freitag - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706269',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1240,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});
