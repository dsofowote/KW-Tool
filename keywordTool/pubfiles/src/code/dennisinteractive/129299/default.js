integration.meta = {
    'sectionID' : '129299',
    'siteName' : 'Money Week - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1267]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1071538',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1007,
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
