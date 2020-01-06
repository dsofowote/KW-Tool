integration.meta = {
    'sectionID': '127523',
    'siteName': 'Hungrygowhere - Desktop - (SG)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1310]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '916166',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1050,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#layout').css({
            "max-width": "1050px",
            "margin": "0 auto"
        });
        $('#main-navi .link').css({
            "margin-right": "28px",
            "margin-left": "10px"
        });
        $('#logo').css({
            "margin-left": "10px"
        });
    }
});