integration.meta = {
    'sectionID' : '130223',
    'siteName' : 'La Vanguardia - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1111346',
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
        $(".header-logo-wrapper, .header, .header-menu, .header-pre-nav-wrapper, .footer-wrapper").css({
            "margin": "0 auto",
            "max-width": "1010px",
            "left" : "0",
            "right" : "0"
        });
    }

});