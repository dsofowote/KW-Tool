integration.meta = {
    'sectionID' : '130172',
    'siteName' : 'Fan Duel - Desktop - (US)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105259',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".ps, .global-footer, .overflow-fix, [class^='section-']").css({"margin": "0 auto", "max-width": "1200px"});
        $(".global-footer").css({"padding": "0px 10px"});
    }
});
