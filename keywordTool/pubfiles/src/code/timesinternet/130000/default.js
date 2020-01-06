integration.meta = {
    'sectionID' : '130000',
    'siteName' : 'Economic Times - Desktop - (US/Canada)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1265]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098970',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1005,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var navHeight = $(".top-navigation").outerHeight();
			integration.base.setCfg({
                plr_ScrollAdjustment : navHeight
			});
    }
});
