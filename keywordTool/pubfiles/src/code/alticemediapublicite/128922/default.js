integration.meta = {
    'sectionID' : '128922',
    'siteName' : 'Liberation - (next.liberation) - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1042341',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $(".next-nav").css({
       "max-width" : "1024px",
       "margin" : "0 auto"
     });
     $(".width-wrap").css({
       "padding-left" : "10px"
     });
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
        $(".next-nav").css({
          "margin" : "0"
        });
        $(".width-wrap").css({
           "margin-left" : "10px"
         });
         $(".pub-container").css({
           "width" : "1000px",
           "margin-left" : "10px"
         });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
