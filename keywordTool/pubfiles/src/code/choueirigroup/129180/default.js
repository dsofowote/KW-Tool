integration.meta = {
    'sectionID' : '129180',
    'siteName' : 'Justfood.tv - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061862',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 60
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".menu-main-container, #master").css({
            "max-width" : "1200px",
            "margin" : "0 auto"
        })
    }
});
