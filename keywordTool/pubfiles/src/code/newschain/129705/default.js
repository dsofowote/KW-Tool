integration.meta = {
    'sectionID' : '129705',
    'siteName' : 'News Chain - Tablet - ( UK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1086406',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('#header').outerHeight() + 50;
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
        $('footer').css({'max-width':'1040px','margin':'0 auto'});
        $('.bExGcH').css({'padding':'0px'});
        $('.bExGcH:first-of-type').css({'padding-left':'22px'});

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
          $('#frameInner,.cZiuFP').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
          integration.on("adServed", function(e) {
            $(".ism-anchor").css({"right" : '-14px'});

  });
        }
    }
});
