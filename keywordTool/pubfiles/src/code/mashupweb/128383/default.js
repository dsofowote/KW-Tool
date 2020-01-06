integration.meta = {
   'sectionID' : '128383',
   'siteName' : 'Football Addict - Tablet - (FR)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1007625',
   'plr_PageAlignment' : 'center',
   'plr_Responsive' : true,
   'plr_Fluid' : true,
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
      }
      
      //integration.custom.FrameSide = e.data.plr_FrameSide;
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      integration.custom.FrameBottom = e.data.plr_FrameBottom;
      $(".container").css({
          "width" : "unset"
      });
      $("head").append("<style>.ism-frame{z-index: 1900001 !important}</style>");
      $(".footer").css({
          "bottom" : "unset"
      });
      $("#return-to-top").css({
          "right" : integration.custom.FrameSideRight + 5
      });
   }
});
