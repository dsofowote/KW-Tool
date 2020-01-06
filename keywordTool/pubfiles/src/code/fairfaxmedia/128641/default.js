integration.meta = {
    'sectionID': '128641',
    'siteName': 'Traveller - Tablet - (AU) ',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1028293',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $("#nav--primary__wrap").css({
            "max-width": "1000px",
            "margin": "0 auto"
        });

        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            $("#nav--primary__wrap, .header-navigation, .ad-wrap--leaderboard, .page.base, .outer-wrap").css({
                "max-width": "1000px",
                "margin": "0"
            });
        }
    }
});