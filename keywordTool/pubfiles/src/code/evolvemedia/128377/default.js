integration.meta = {
   'sectionID' : '128377',
   'siteName' : 'Total Beauty - Tablet - (UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '1007235',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1020,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $(".wrapper").css({
           "margin-left" : "10px"
         });
         $(".headerAd").css({
           "margin-left" : "0px",
           "max-width" : "1020px"
         });
      }
   }
});
