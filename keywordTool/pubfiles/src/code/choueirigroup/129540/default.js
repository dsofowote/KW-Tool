integration.meta = {
    'sectionID' : '129540',
    'siteName' : ' Eurosport Arabia - Desktop (MENA)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085996',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".main-menuContainer, .main-menuNavigation, .league-sportHeader").css({"max-width": "1030px", "margin": "0 auto"});
        $(".main-menuNavigation").css({"height": "76px", "padding-right": "0px"});
        $("#Leaderboard").css({"display":"none"});
    }
});
