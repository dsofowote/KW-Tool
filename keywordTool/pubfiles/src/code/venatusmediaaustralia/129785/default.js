integration.meta = {
    'sectionID' : '129785',
    'siteName' : 'What Culture - Desktop - (APAC)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088411',
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
        $('.js-ad-class').css({'display':'none'});
        $('.app-footer').css({'max-width':'1000px', 'margin':'0 auto'});
        if ($("#app-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#app-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
    }
});
