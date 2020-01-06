integration.meta = {
    'sectionID' : '129629',
    'siteName' : 'Live Science - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086239',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".primary-nav, #document-footer").css({"margin": "0 auto", "max-width": "970px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".primary-nav, #document-footer, #main").css({"margin-left": "0"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
