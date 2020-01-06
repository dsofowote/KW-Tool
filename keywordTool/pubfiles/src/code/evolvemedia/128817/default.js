integration.meta = {
    'sectionID' : '128817',
    'siteName' : 'Game Revolution - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072210',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.on("layoutChange", function(e) {
          integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
          $("header").css({"top" : integration.custom.PageSkinTopPanel + "px"});
          integration.custom.InSkinBottomNav();
          $(document).scroll(function() {
              integration.custom.InSkinBottomNav();
          });
      });

      integration.custom.InSkinBottomNav = function(){
          var scrolltop = $(document).scrollTop();
          var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
          console.log(headerTop);
          if ( headerTop > 0 ) {
              $("header").css({
                  "top" : headerTop + "px"
              });
          } else {
              $("header").css({
                  "top" : "0"
              });
          }
      }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
            $('.wrapper').css({'left': (- integration.custom.PageSkinFrameSide)/2});
        }
    }
});
