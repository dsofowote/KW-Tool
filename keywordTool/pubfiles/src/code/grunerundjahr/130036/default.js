integration.meta = {
    'sectionID' : '130036',
    'siteName' : 'Chefkoch - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
     /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1101174',
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
        var headHeight = $('.r-nav').height() + $('.r-header').height();
        if ($(".r-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".r-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
    }
});
