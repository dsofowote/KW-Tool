integration.meta = {
    'sectionID' : '129178',
    'siteName' : 'Nawa3em - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061860',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 81
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#main-content, footer").css({
            "max-width" : "1200px",
            "margin" : "0 auto"
        });
    }
});
