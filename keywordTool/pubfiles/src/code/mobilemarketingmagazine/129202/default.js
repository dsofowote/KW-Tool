integration.meta = {
    'sectionID': '129202',
    'siteName': ' Mobile Marketing Magazine - Desktop - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1063705',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($("header#head").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header#head");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }

        $(".body_wrap, section.footer_section").css({
            "float" : "none"
        });
    }
});

integration.on('adServed', function (e) {
    var headHeight = $(".nav_wrap .contain-to-grid").outerHeight();
    console.log(headHeight);
    $(".ism-frame").parent().css({
        "position" : "relative",
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
    });
});