integration.meta = {
   'siteName' : 'SITE NAME',
   
   'platform' : 'smartphone',
   'assessment' : 'true'
};




function setWindow() {
   return currentWindow;
}

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
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

integration.on('adServed', function(e) {
   $('#ismdemo_loader').remove();
});
