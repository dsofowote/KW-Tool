integration.meta = {
    'sectionID': '130203',
    'siteName': 'AS - Desktop - (ES)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1106985',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".headerAs").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".headerAs");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -120,
                plr_ScrollAdjustment: -70
            });
        }
        $(".headerAs").css({ "margin-bottom": "0" });
        $("footer, .header-seccion, .nav-seccion").css({ "margin": "0 auto", "max-width": "980px" });
    }
});