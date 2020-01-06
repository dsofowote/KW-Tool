integration.meta = {
    'sectionID' : '129138',
    'siteName' : 'Carsales - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058405',
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
      $(".csn-header").css({
        "z-index" : "11"
      });
      $("._l-site-wrap, .csn-home-search, .csn-home-ad, .button--s-lg, .primary-footer").css({
        "max-width" : "960px",
        "margin" : "0 auto"
      });
      $("._l-container, .site-nav-wrapper, .site-nav, ._l-header, ._c-hero-unit, .sticky-wrapper, .model-filter.stuck, ._c-modal--v2__header-bg").css({
        "max-width" : "960px"
      });
      $(".footer-widgets").css({
        "padding-left" : "20px"
      });
      $("._l-top-deal > div > a > img").css({
        "margin-left" : "-32px"
      });

      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          /* Pageskin Edge specific changes */
          integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
          $(".csn-header").css({
            "left" : "0px"
          });
          $(".view-all-models").css({
            "left" : "20px",
            "z-index" : "4"
          });
          $("section").css({
            "max-width" : "960px",
            "margin-left" : "0px"
          });
          $("._l-site-wrap, .primary-footer").css({
            "margin-left" : "0px"
          });
      }
      window.unloadPageskin = function() {
        try {
          integration.destroy();
        } catch (e) {
        }
      };
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10"
    });
});
