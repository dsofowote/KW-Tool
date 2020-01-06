integration.meta = {
    'sectionID' : '129393',
    'siteName' : 'China Times - Desktop - ( TW )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076205',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".main-footer").css({"margin": "0 auto", "max-width": "1240px"});
    }
});
