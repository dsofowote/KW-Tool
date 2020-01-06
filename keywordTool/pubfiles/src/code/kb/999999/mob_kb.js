integration.meta = {
   'siteName' : 'SITE NAME',
   
   'platform' : 'smartphone',
   'assessment' : 'true'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId': 1093433,
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'srv_Keywords': 'mobile_opt_a, ISM_TEST',
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
