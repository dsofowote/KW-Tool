integration.meta = {
    'sectionID' : '130099',
    'siteName' : 'Macworld - Desktop - (NL) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102703',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#header, footer").css({"margin": "0 auto", "max-width": "960px"});
    }
});
