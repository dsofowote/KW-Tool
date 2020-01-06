integration.meta = {
   'sectionID' : '128122',
   'siteName' : 'Marie Claire MY - (UNPUB. UNTIL APPROV.) - Desktop - ( MY )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '994305',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
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