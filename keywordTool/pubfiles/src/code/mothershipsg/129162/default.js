integration.meta = {
    'sectionID': '129162',
    'siteName': 'Mothership.sg - Desktop - ( SG )',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1296]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1061009',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1036,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {}
});

integration.on("adServed", function (e) {
    var headHeight = $(".top-nav").outerHeight();
    $(".ism-frame").parent().css({
        "top": headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight,
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/80832119/inskin_desktop_passback', [[970, 90], [728, 90], [1, 1]]).display();\n<\\script>";
};