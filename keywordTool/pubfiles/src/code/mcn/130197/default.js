integration.meta = {
    'sectionID': '130197',
    'siteName': 'CNN - Desktop - (AU) ',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1106539',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#nav__plain-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#nav__plain-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
            });
        }
        $("#nav__plain-header").css({ "top": "0", "position": "inherit" });
        $("body").css({ "padding-top": "0" });
        $("#scrollover-ad-wrap, #sticky-ad-wrap").css({ "display": "none" });
        $("#footer-wrap, .pg-wrapper, #footer-nav-container, #mount").css({ "margin": "0 auto", "max-width": "1100px", "padding": "0 5px" });
    }
});