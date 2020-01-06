integration.meta = {
    'sectionID' : '128461',
    'siteName' : 'Press Logic - (Pretty/Creative Appr.) - Desktop - ( HK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1345]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1084565',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1085,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 56
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#header, #footer").css({"margin": "0 auto", "max-width": "1085px"});
    }
});
