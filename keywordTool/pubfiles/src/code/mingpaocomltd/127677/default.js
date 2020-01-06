integration.meta = {
   'sectionID' : '127677',
   'siteName' : 'Ming Pao Weekly - Tablet - ( HK )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '913831',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("#center").css({
             "margin-left" : "0px"
         });
      }
   }
});
