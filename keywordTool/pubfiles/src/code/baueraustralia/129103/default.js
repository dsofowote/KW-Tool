integration.meta = {
    'sectionID': '129103',
    'siteName': 'Women\'s Weekly Food - Tablet - ( AU )',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1055492',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            integration.custom.tabletEdge = true;
            $(".site-wrapper").css({
                "margin": "0"
            });
            $(".header").css({
                "top": "0px"
            });
            $(".sticky-block, #app").css({
                "width": "1024px"
            });
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
        }
            $(".header").css({
                "margin": "0 auto",
                "left": "0",
                "right": "0",
                "top" : "0",
                "position": "fixed"
            });
    }
});

integration.on('adServed', function (e) {
        var headerHeight = $(".header").outerHeight();
        var headHeight = $('.header-banner').height();
        $(".ism-frame").parent().css({
            "top": headerHeight,
            "position": "relative"
        });
        integration.base.setCfg({
          plr_PageHeightAdjustment: -headHeight,
          plr_ScrollAdjustment: -headHeight
        });
        $("head").append('<style>.header{top:0px !important;}</style>');
});
