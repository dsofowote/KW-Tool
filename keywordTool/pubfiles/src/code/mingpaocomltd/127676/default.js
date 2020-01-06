integration.meta = {
   'sectionID' : '127676',
   'siteName' : 'Ming Pao Weekly - Desktop - ( HK )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '913830',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
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
