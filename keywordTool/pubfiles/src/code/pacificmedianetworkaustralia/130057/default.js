integration.meta = {
    'sectionID' : '130057',
    'siteName' : 'Girlfriend - Desktop - (AU)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1505]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102593',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1245,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : '45'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".PageWrap").css({"margin": "0 auto", "max-width": "1245px"});
    }
});

integration.on('adServed', function(e) {
    if ($(".home").length == 0 ) {
        $(".ism-anchor").css({"top": "44px"});
        integration.base.setCfg({
            plr_PageHeightAdjustment : -44,
            plr_ScrollAdjustment : 0
        });
    }
});