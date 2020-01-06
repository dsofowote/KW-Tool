integration.meta = {
   'sectionID' : '128081',
   'siteName' : 'AspirantSG - Desktop - (SG) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '974672',
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
