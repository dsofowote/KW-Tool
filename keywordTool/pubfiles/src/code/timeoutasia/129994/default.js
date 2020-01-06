integration.meta = {
    'sectionID' : '129994',
    'siteName' : 'Timeout Asia - Tablet - (SG)  ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
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
        $('#header, .site-footer, .navigation-wrapper ').css({'max-width':'1200px', 'margin':'0 auto'});
        $('head').append('<style>.xs-mr5{margin-right:2rem !important}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#header, #content, .site-footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});
