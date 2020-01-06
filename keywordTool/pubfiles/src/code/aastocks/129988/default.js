integration.meta = {
    'sectionID' : '129988',
    'siteName' : 'AAStocks - (EN Site) - Tablet - ( HK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#topPanel').css({'max-width':'1240px', 'margin':'0 auto'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#topPanel, #divContentContainer, #divSiteMap ').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})
        }
    }
});
