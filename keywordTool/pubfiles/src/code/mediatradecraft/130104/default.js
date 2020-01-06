integration.meta = {
    'sectionID' : '130104',
    'siteName' : 'Just Jared - (ARTICLE PAGES) - Tablet- (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104832',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1035,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#page, #footer").css({"margin-left": "55px"});
            $("#footerbar").css({"max-width": "1035px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
