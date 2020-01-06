integration.meta = {
    'sectionID' : '129518',
    'siteName' : ' Affarsvarlden - Desktop - (SE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085427',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1060,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".js-nav-hide-on-resize").css({"margin": "0 auto", "max-width": "1060px"});
    }
});
