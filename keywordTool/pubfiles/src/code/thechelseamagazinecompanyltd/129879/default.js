integration.meta = {
    'sectionID' : '129879',
    'siteName' : 'Artists and Illustrators  - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
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
        $('.leaderboard, .google-auto-placed').css({'display':'none'});
        $('#ai-footer').css({'max-width':'1000px', 'margin':'0 auto'});
        var headHeight =$('#fixed-head').height() + $('#top-bar').outerHeight();
        if ($("#fixed-head").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#fixed-head");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment: -headHeight
            });
        }
    }
});
