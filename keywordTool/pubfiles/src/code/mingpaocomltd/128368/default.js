integration.meta = {
   'sectionID' : '128368',
   'siteName' : 'MingPao Paid Premium - (Creative Approval) - Desktop - ( HK )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1256]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1006969',
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
