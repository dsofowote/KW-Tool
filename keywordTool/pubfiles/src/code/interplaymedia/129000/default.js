integration.meta = {
    'sectionID' : '129000',
    'siteName' : 'Melbourne United - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045575',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".club-sponsors-content, .club-footer").css({
            "max-width" : "1180px",
            "margin" : "0 auto"
        });

        $("body").css({
            "overflow" : "visible"
        });
    }
});

integration.on('adServed', function(e){
    $("div.club-footer-section-navigation").css({
        "padding" : "50px"
    });
});
