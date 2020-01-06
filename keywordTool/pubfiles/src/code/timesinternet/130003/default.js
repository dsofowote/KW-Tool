integration.meta = {
    'sectionID' : '130003',
    'siteName' : 'Times of India - Desktop - (US/Canada)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098973',
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
        $("#footer, .footer, .ent_footer, .ent_header, #app").css({"margin": "0 auto", "max-width": "1280px"});
        $("#mainwrapper").css({"height": "unset"});
    }
});