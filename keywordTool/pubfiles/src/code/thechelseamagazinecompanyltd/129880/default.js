integration.meta = {
    'sectionID' : '129880',
    'siteName' : 'Artists and Illustrators - Tablet- (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094963',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('html, body').css({'overflow-x':'visible'});
        $('.adsbygoogle').css({'display':'none'});
        $('#ai-footer, #fixed-head, #top-bar').css({'max-width':'1000px', 'margin':'0 auto'});
        $('head').append('<style>body{margin-left:20px !important}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.wrap').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            $('#top-bar').css({'margin-left':'0px'});
        }
    }
});
