integration.meta = {
    'sectionID' : '129187',
    'siteName' : ' Gheir - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1062266',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 81
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#bodymaster_for_skinning, #master").css({
            "max-width" : "1180px",
            "margin" : "0 auto"
        });
    }
});
