integration.meta = {
    'sectionID': '130198',
    'siteName': 'CNN - Tablet - (AU) ',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1106540',
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
        $("body").css({ "padding-top": "0" });
        $("#scrollover-ad-wrap, #sticky-ad-wrap").css({ "display": "none" });
        $("#nav__plain-header").css({ "margin": "0px !important" });
        $("#footer-wrap, .pg-wrapper, #footer-nav-container, #mount").css({ "margin": "0 auto", "max-width": "1100px", "padding": "0 5px" });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#footer-wrap, .pg-wrapper, #footer-nav-container").css({ "margin-left": "0px" });
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
        }
    }
});