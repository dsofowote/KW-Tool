integration.meta = {
    'sectionID' : '129551',
    'siteName' : 'Al-Hayat - (Desktop) - MENA ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1550]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085456',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1290,
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
