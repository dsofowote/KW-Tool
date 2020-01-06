integration.meta = {
    'sectionID': '130201',
    'siteName': 'Sky News - Tablet - (UK)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1106612',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".sdc-site-header").css({ "margin": "0 auto", "max-width": "1000px" });
        if ($(".sdc-article-sibling-links").length > 0) {
            integration.base.setCfg({
                plr_ScrollAdjustment: 100
            });
        };
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".sdc-site-header").css({ "margin-left": "0px" });
            $(".outbrain-wrap, .section-wrap, .sdc-news-footer").css({ "max-width": "1000px" });
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
        }
    }
});