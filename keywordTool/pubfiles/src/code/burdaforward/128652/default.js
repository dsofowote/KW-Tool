integration.meta = {
    'sectionID' : '128652',
    'siteName' : 'Instyle - Tablet - (DE) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028323',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1150,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 70
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
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
        $("#header").css({
            "max-width" : "1100px",
            "margin" : "0 auto"
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
