integration.meta = {
    'sectionID' : '129557',
    'siteName' : 'Computerworld - Desktop - ( HK SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1350]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085459',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1090,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.lo-top_promo').height() + $('.lo-header').height() -15;
        $('.lo-footer').css({'max-width':'1090px', 'margin':'0 auto'});
        integration.base.setCfg({
            plr_ScrollAdjustment: -headHeight
        });
    }
});