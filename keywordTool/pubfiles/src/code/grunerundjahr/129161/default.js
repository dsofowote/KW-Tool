integration.meta = {
    'sectionID' : '129161',
    'siteName' : 'Vital - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1060922',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1152,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});
