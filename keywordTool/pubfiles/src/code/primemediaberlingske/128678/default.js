integration.meta = {
    'sectionID': '128678',
    'siteName': 'B.T. - Tablet - (DK)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1029512',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $(".site-header, .sitemap__block.col-md-12, .content-wrapper").css({
            "margin": "0 auto",
            "max-width": "960px"
        });

        $(".content-wrapper").css({
            "float": "none",
        });

        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            $(".content-wrapper, .site-header").css({
                "margin": "0px",
                "margin-right": "20px",
            });
            $(".content-wrapper, .site-header").css({
                "max-width": "960px"
            });
            $(".sitemap__block.col-md-12, .site-footer").css({
                "margin": "0px",
                "margin-right": -integration.custom.FrameSideRight
            });
        }
    }
});