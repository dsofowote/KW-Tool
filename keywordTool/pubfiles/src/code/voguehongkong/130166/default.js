integration.meta = {
    'sectionID': '130166',
    'siteName': ' Vogue - Desktop - (HK) ',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1380]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1105144',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".site-head").outerHeight();
        if ($(".site-head").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".site-head");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight
            });
        }
        $(".adv-wrap--header").css({ "display": "none" });
        $(".site-footer, .c-filter, .section-title").css({ "margin": "0 auto", "max-width": "1120px" });
    }
});