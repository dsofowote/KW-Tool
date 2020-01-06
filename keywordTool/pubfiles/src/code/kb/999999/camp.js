integration.meta = {
   'sectionID' : '124407',
   'siteName' : 'Development Team Site IDs - Desktop',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '706145',
   'plr_AdProviders' : ['ISAP'],
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
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

window.ISMPassback = function() {
   return "<script>alert('Passback fired');<\\script>";
};
