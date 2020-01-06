integration.meta = {
   'sectionID' : '128255',
   'siteName' : 'Familie Journal - Desktop - (DK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '994940',
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
     $("body > div.page.position-relative.overflow-hidden").css({
       "width" : "960px",
       "margin" : "0 auto"
     });
   }
});
