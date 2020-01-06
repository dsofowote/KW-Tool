integration.meta = {
    'sectionID': '130177',
    'siteName': 'Elle - Desktop - ( AU )',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1105535',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".header-wrapper").css({ "margin-left": "auto", "margin-right": "auto", "max-width": "1024px" });
        $(".header").css({ "margin": "0 auto", "max-width": "1024px", "left": "unset" });
        $(".ad--section-top-leaderboard").css({ "display": "none" });
    }
});