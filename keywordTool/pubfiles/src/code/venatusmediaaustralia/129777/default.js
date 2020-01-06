integration.meta = {
    'sectionID' : '129777',
    'siteName' : 'RPG Site - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088403',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1010,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".vm-skin-left").css({"display": "none"});
        $("header, footer").css({"margin": "0 auto", "max-width": "1010px"})
    }
});
