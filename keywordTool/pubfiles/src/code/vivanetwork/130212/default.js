integration.meta = {
    'sectionID': '130212',
    'siteName': 'Viva - Desktop - (ID)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1510]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1107689',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1250,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_ScrollAdjustment: 38
            });
        }
        $(".footer-all, .muat-lainnya").css({ "margin": "0 auto", "max-width": "1250px" });
    }
});