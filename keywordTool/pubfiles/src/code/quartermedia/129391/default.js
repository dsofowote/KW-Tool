integration.meta = {
    'sectionID' : '129391',
    'siteName' : 'Laut - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076114',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 864,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#leaderboard").css({'display':'none'});
    }
});
