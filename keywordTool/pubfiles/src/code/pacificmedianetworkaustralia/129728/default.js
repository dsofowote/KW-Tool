integration.meta = {
    'sectionID' : '129728',
    'siteName' : 'All Recipes - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1642]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087160',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1382,
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