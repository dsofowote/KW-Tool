integration.meta = {
    'sectionID': '129174',
    'siteName': 'Motory - Desktop - (MENA)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1061786',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1050,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_GetContentHeightVersion': 2,
    'plr_EnableActiveResize' : false,
    'plr_PageHeightAdjustment' : -35
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $("footer, .wrap-newsletter, #header").css({
            "max-width": "1050px",
            "margin": "0 auto"
        });

        $(".wrap-newsletter").css({
            "float": "none"
        });

        $(".block-intro-logo").css({
            "max-width": "1050px",
            "margin": "0px auto",
            "display": "flex",
            "float": "none"
        })
    }
});

integration.on('adServed', function (e) {
    $(".ism-anchor").css({
        "z-index": "100000"
    });
});