integration.meta = {
    'sectionID' : '130016',
    'siteName' : 'The Roar - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1448]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099527',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1188,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.po-nav-top').height();
        $('.pm-ad-unit').css({'display':'none'});
        $('.o-footer, #banner, .po-nav-sub  ').css({'max-width':'1188px', 'margin':'0 auto'});
        if ($(".po-nav-top").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".po-nav-top");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
    }
});