integration.meta = {
   'siteName' : 'SITE NAME',   
   'platform' : 'tablet',
   'assessment' : 'true'
};

/* Added a comment for testing purposes 2 */

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'mf_siteId': 1093433
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('#demo_mainDiv').css({
            'margin-left' : '0px'
         });
      }
   }
});