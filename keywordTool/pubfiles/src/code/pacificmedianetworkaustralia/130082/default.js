integration.meta = {
    'sectionID' : '130082',
    'siteName' : 'Marie Claire - Desktop - (AU)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1532]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102597',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1272,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.Navbar').height();
        $('.PageWrap').css({'max-width':'1272px', 'margin':'0 auto'});
        integration.base.setCfg({
            plr_ScrollAdjustment: headHeight
          });
    }
});
