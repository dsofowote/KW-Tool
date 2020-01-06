integration.meta = {
    'sectionID' : '130145',
    'siteName' : 'Just Jared JR - (ARTICLE PAGES) - Tablet- (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104852',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('head').append('<style>body{display:initial !important}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.head, #frame, #footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})
            integration.on("adServed", function(e) {
                $(".ism-anchor").css({"left" : "20px"});

          });
        }
    }
});