integration.meta = {
    'sectionID' : '130168',
    'siteName' : 'Great Deals - Desktop - (SG) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1241]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105188',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 981,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});
