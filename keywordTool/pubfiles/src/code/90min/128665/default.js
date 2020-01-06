integration.meta = {
    'sectionID': '128665',
    'siteName': '90min - Tablet - ( IT )',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029126',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {

        if ($(".page-wrap").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore(".page-wrap");
            integration.base.setCfg({
                'plr_AnchorParent': '#inskinanchor'
            });
        }

        var hh1 = $("#site-header").outerHeight();
        var hh2 = $(".nav__wrapper").outerHeight();
        integration.custom.headHeight = hh1 + hh2;

        $("#site-footer").css({
            "max-width": "1320px",
            "margin": "0 auto"
        });

        $("#site-header").css({
            "margin-top": (hh1 - 4)
        });

        $(".mobile-nav-main-wrapper").css({
            "margin": "0"
        });

        $("head").append("<style>#site-header{margin-top:" + (hh1 - 4) + "px !important;transform:translateY(-50px) !important;} .mobile-nav-main-wrapper{margin: 0 !important;transform:translateY(0) !important;}</style>");


        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
        }
    }
});

integration.on('adServed', function () {
    $(".ism-frame").parent().css({
        "top": integration.custom.headHeight
    });

    var windowWidth = $(window).width();
    var contentWidth = $(".page-wrap__main").width();
    var sides = (windowWidth - contentWidth) / 2;

    $(".jwplayer").parent().css({
        "right": sides,
        "top": integration.custom.headHeight
    });
    console.log(integration.custom.headHeight, sides);
    $("head").append("<style>.jwplayer{top:" + integration.custom.headHeight + "px !important;}</style>");
});