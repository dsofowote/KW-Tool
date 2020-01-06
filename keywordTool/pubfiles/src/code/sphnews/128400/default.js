integration.meta = {
   'sectionID' : '128400',
   'siteName' : 'The Straits Times - Tabket - (SG)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1009000',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1190,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_ScrollAdjustment" : 30
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $("#navbar, footer").css({
            "max-width" : "1180px",
            "margin" : "0 auto"
      });
      $('.leaderboard ').css({'display':'none'});
      $("head").append("<style>#navbar{max-width:1180px !important");
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

integration.on("layoutChange", function(e) {
   integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
   integration.custom.InSkinTopNav();
   $( document ).scroll(function() {
       integration.custom.InSkinTopNav();
   });
});

integration.custom.InSkinTopNav = function() {
   var height = $(document).scrollTop();
   if( height < integration.custom.PageSkinTopPanel ){
       var newheight = integration.custom.PageSkinTopPanel - height;
       $("#navbar").css({
           "margin-top" : "0px"
       });
   }else{
       $("#navbar").css({
           "margin-top" : newheight
       });
   }
}



integration.on('adServed', function(e){
   $(".ism-frame").parent().css({
         "z-index" : "2000000"
   });
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};