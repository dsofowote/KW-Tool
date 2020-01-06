integration.meta = {
    'sectionID' : '130209',
    'siteName' : 'ITavisen - Tablet - (AU) ',
    'platform' : 'tablet'
};

function setWindow() {
    return currentWindow.top;
  };

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1107678',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header').height();
        $('#page-footer,  #vi-stories-main-container').css({'max-width':'980px','margin':'0 auto'})
        $('.ads-area, .banner').css({'display':'none'});
        $('body').css({'overflow-x':'visible'});
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight,
            plr_ScrollAdjustment : headHeight
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#site-wrap, #page-footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});
