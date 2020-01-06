integration.meta = {
    'sectionID' : '128651',
    'siteName' : 'Instyle - Desktop - ( DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028322',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1150,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#header").height();
      var stickyHeaderHeight = $("#menu-main-navigation").height();
      var scrollAdj = headHeight - stickyHeaderHeight
      if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header .sticky-wrapper");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        if ($("#header-home").height() > 60) {
              integration.base.setCfg({
                  plr_ScrollAdjustment : -scrollAdj
              });
          }
        $(".teaser__img-container-wrapper, .container-form, .region-full-content.region-newsletter, .region-full-content.pargraph--ecommerce-slider-paragraph--taxonomy-term, .swipeable--horizontal, .item-media--header").css({
          "width" : "1150px",
          "margin-left" : "auto",
          "margin-right" : "auto"
        });
        $("slider .ecommerce-slider .swiper-button-next, .region-ecommerceslider .swiper-button-next").css({
          "right" : "0px"
        });
        $(".page-ecommerce-slider .ecommerce-slider .swiper-button-prev, .region-ecommerceslider .swiper-button-prev").css({
          "left" : "0px"
        });
        $("head").append("<style>.region-newsletter{width: 1150px !important; margin-left: auto !important; margin-right: auto !important;}</style>");
    }
});
