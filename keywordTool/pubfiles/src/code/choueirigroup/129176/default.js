integration.meta = {
    'sectionID' : '129176',
    'siteName' : 'Motorsmotion - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061788',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#header, .main-wrap").css({
            "max-width" : "1160px",
            "margin" : "0 auto"
        });
        
    }
});
