integration.meta = {
   'sectionID' : '126188',
   'siteName' : 'Oh Bulan Destkop',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706860',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
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
