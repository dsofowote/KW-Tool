integration.meta = {
    'sectionID' : '129956',
    'siteName' : 'Australian Geographic - (Publisher booking) - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1060,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header').outerHeight() + $('.main-nav').outerHeight() + $('.alt-nav').outerHeight();
        $('.footer').css({'max-width':'1060px','margin':'0 auto'});
        $('.columnwide, .top-banner, .full-banner').css({'display':'none'});
        if ($(".main-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".main-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment: -headHeight
            });
        }
    }
});