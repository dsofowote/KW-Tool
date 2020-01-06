integration.meta = {
    'sectionID' : '129704',
    'siteName' : 'News Chain - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1086405',
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
        var headHeight =$('#header').height();
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
        $('footer').css({'max-width':'1040px','margin':'0 auto'})
    }
});
