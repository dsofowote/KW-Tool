integration.meta = {
    'sectionID' : '129546',
    'siteName' : 'Car and Classic - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1282]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1085453',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1022,
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
