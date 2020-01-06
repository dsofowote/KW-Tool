integration.meta = {
    'sectionID' : '129111',
    'siteName' : 'MyGameOn - Desktop - (MY)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1370]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055240',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1110,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("body").css({"background-image": "unset"});
    }
});
