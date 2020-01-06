integration.meta = {
    'sectionID' : '129911',
    'siteName' : 'Der Postillon - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1095157',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#skyscraper-container, #leaderboard-oben-desktop-container').css({'display':'none'});
    }
});
