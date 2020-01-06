integration.meta = {
    'sectionID' : '129382',
    'siteName' : 'Boss Hunting - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1075298',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#lyra-wrapper, .l-sticky-navbar").css({"margin": "0 auto", "max-width": "1160px"});
    }
});
