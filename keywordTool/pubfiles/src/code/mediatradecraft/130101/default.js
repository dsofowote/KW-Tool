integration.meta = {
    'sectionID' : '130101',
    'siteName' : 'Just Jared - (ARTICLE PAGES) - Desktop - (INT) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1295]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104831',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1035,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#footerbar").css({"margin": "0 auto", "max-width": "1035px"});
    }
});
