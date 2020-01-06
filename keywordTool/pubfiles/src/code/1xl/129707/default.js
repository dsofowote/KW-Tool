integration.meta = {
    'sectionID' : '129707',
    'siteName' : '1XL Newsquest Regionals - (Aegis) - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1086723',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
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
