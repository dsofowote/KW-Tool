integration.meta = {
    'sectionID': '130154',
    'siteName': 'Talk Talk - (News&TV Guide - ARTICLE PAGES) - Tablet - (UK)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var headHeight = $("header.header").outerHeight();
        integration.base.setCfg({
            plr_PageHeightAdjustment: -headHeight
        });
        if ($("header.header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header.header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }
        $("main.page.container, .homepage, .container, .new-article-view-page").css({
            "max-width": "1000px",
            "margin": "0 auto"
        });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            $("main.page.container").css({
                "margin-left": "0"
            });
        }
    }
});

integration.on('adServed', function () {
    var headHeight = $("header.header").outerHeight();
    $(".ism-anchor").css({
        "top": headHeight,
        "position": "relative",
        "z-index": "1000"
    });
    $("main.page.container").css({
        "max-width": "1000px",
        "margin": "0 auto"
    });
    $(".ob-smartfeed-wrapper").css({
        "max-width": "1130px",
        "margin": "0 auto"
    });
    $("body").css({
        "overflow-x": "hidden"
    });
    $("#headerNav").css({
        "top": "0px"
    });
    $("#topSearch").css({
        "top": "50px"
    });
    $("#inskinanchor").css({
        "margin-top" : "55px"
    });
});