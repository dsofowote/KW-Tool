integration.meta = {
   'sectionID' : '128039',
   'siteName' : 'Music Radar - Tablet - (AU) ',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
   'mf_siteId' : '971039',
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
     $(".menuitems.container.full").css({
       "margin" : "0 auto",
       "width" : "960px"
     });
     var adUnit = $(".dfp-leaderboard-container").next();
     var checkMain = $(adUnit).attr('id');
     if(checkMain !== "main"){
       $(adUnit).hide();
     }
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("#main").css({
            "margin": "0"
         });
         $("#document-footer, .primary-nav").css({
             "margin": "0",
             "width": "960px"
         });
         $(".moat-skin-container-tracking").css({
             "width": "960px"
         });
      }
   }
});
