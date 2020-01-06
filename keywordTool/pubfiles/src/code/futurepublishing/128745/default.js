integration.meta = {
    'sectionID' : '128745',
    'siteName' : ' AnandTech - Desktop - (INTL excl UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1271]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1033650',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1011,
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
