integration.meta = {
   'sectionID' : '128202',
   'siteName' : 'The Drum - ((Publisher bookings)) - Tablet - ( UK )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '989455',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
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
         $("#page-wrapper").css({
           "margin-left" : "0px",
           "padding" : "0px"
         });
         $("#footer").css({
           "margin-left" : "0px",
           "padding" : "30px"
         });
         $("#content, body > div.js-all-navigation.all_nav, body > div.center.dark, footer").css({
           "width" : "1000px",
           "margin-left" : "0px"
         });
      }
   }
});
