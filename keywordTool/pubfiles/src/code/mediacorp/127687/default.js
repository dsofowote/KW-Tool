integration.meta = {
   'sectionID' : '127687',
   'siteName' : 'Today Online Weekend Edition - Desktop - (SG)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '781581',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1140,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
		$('html').addClass('in-skin');
   }
});
