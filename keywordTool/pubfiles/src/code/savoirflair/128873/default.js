integration.meta = {
    'sectionID': '128873',
    'siteName': 'Savoir Flair - Desktop - MENA',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1220]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1039778',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_ScrollAdjustment' : 100
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $("body").addClass("inskin");
        var headHeight = $(".c-menubar").outerHeight();
            integration.base.setCfg({
                plr_ScrollAdjustment: headHeight
            });
    }
});