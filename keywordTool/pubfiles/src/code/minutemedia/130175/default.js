integration.meta = {
    'sectionID' : '130175',
    'siteName' : 'Fan Duel - Tablet - (US) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105260',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".global-footer").css({"margin": "0 auto", "max-width": "1200px"});
        $(".global-footer").css({"padding": "0px 10px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".ps-container, .ps, .ss, .overflow-fix, [class^='section-'], .sportsbook-module-content").css({"max-width": "1200px"});
            $(".global-footer, .sportsbook-module-content").css({"margin-left": "0"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
