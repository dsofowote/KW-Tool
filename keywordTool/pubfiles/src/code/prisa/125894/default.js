integration.meta = {
   'sectionID' : '125894',
   'siteName' : 'AS',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 996,
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
