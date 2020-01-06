integration.meta = {
   'sectionID' : '128274',
   'siteName' : 'ABC Feminin - Desktop - ( FR )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1370]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '996357',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1110,
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
