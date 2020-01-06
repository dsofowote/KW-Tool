integration.meta = {
    'sectionID': '125260',
    'siteName': 'The Guardian.com - Desktop - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1560]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072249',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_FastInit' : true,
    'plr_HideElementsByClass': ''
};

integration.on("adCallResult", function (e) {
    if (e.data.hasSkin) {
        $("body").css({
            "overflow": "initial"
        });

        $(".js-breaking-news-placeholder").css({
            "max-width": "1300px",
            "left": "0px",
            "right": "0px",
            "margin": "0 auto"
        });

        $("article, footer, .fc-container").css({
            "max-width": "1300px",
            "margin": "0 auto"
        });

        $(".js-main-menu").css({
            "z-index" : "6000"
        });

        $("head").append("<style> .site-message--banner {z-index: 6000 !important;}</style>");
        $("html").append("<img alt='' data-widget='image' src='//inskin.hs.llnwd.net/cdn/isfe/resources/img/1x1.gif' style='height:1px; width:100%'>");
        $("head").append("<style>.new-header, #bannerandheader{width: 1300px !important; margin: 0 auto; left: 0 !important; right: 0 !important;}</style>");
    }
});

integration.on('adServed', function (e) {
    $(".ism-anchor").css({
        "z-index": "5000"
    });
});
