integration.meta = {
    'sectionID' : '129365',
    'siteName' : 'D\'Marge Australia - (Creative Approval) - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074563',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1104,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#main').css({'z-index':'0'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#main').css({'left': -(integration.custom.FrameSideRight)/2});
            $('header').css({'left': "0px"});
        }
    }
});

integration.on("adServed", function(e) {
    var headHeight = $('header').outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight,
    });
});
