integration.meta = {
    'sectionID' : '129548',
    'siteName' : 'StriveMe - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086026',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#mm-0, .header-wrapper").css({"max-width": "1170px", "margin": "0 auto"});
        $("#Leaderboard").css({"display": "none"});
    }
});