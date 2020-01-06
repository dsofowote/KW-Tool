integration.meta = {
    'sectionID' : '130115',
    'siteName' : 'Virgin Radio FR - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104195',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('#top').outerHeight();
        integration.custom.FrameTop = e.data.plr_FrameTop;
        $('#mainSection, #stickyShares').css({'max-width':'1020px','margin':'0 auto'});
        $('html, body').css({'height':'auto'});
        $('#nav').css({'z-index':'5', 'top':integration.custom.FrameTop });
        integration.base.setCfg({
            plr_ScrollAdjustment: headHeight
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#mainSection').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});

            integration.on("adServed", function(e) {
                var headHeight = $('#top').outerHeight();
                  $(".ism-anchor, #mainSection").css({"top" : headHeight});
                        integration.base.setCfg({
                                    plr_PageHeightAdjustment : -headHeight
                            })
            });

        }
    }
});