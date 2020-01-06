integration.meta = {
    'sectionID' : '129185',
    'siteName' : 'Ra2ed - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1062264',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 80
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".main, header, footer").css({
            "max-width" : "1150px",
            "margin" : "0 auto"
        });

    }
});
