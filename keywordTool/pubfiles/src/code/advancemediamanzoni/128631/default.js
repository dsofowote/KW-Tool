integration.meta = {
    'sectionID' : '128631',
    'siteName' : 'La Stampa - Desktop - (IT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027771',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
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
