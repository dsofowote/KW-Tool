integration.meta = {
    'sectionID': '130153',
    'siteName': 'Talk Talk - (News&TV Guide - ARTICLE PAGES) - Desktop - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1260]
};

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
    'plr_FastInit': true,
    'plr_HideElementsByClass': ''
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
    }
});

integration.on('adServed', function () {
    var headHeight = $("header.header").outerHeight();
    $(".ism-anchor").css({
        "top": headHeight,
        "position": "relative",
        "z-index": "1000"
    });

    $("#inskinanchor").css({
        "margin-top" : "55px"
    });

    $("body").css({
        "overflow-x": "hidden"
    });
});

/* Passback Tag */
window.ISMPassback = function () {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/29349\"><\\script>";
};