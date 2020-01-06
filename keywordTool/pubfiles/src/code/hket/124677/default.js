integration.meta = {
    'sectionID': '124677',
    'siteName': 'HKET - Desktop',

    'platform': 'desktop',
    'restrictions': ''
};

integration.testParams = {
    'desktop_resolution': [1580]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '706253',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1330,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    //'plr_StartScrollOnAnchor': true
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($(".top-news-container").length == 1) {
            var topHeader = $(".top-news-container");
            $(topHeader).insertBefore("header");
            $("<div id='inskinanchor'></div>").insertAfter(".top-news-container");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
            });
        }

        $(".header-ad.header-wrapper").css({
            "display": "none"
        });

        $(document).scroll(function () {
            integration.custom.scrollAdj();
        });

    }
});

integration.custom.scrollAdj = function () {
    if ($(".sticky-header-container.stick").length >= 1) {
            $(".sticky-header").css({
                "width": "1330px",
                "margin": "0 auto",
                "left": "0",
                "right": "0"
            });
    } else {
            $(".sticky-header").css({
                "width": "initial",
                "margin": "0 auto",
                "left": "initial",
                "right": "initial"
            });
    }
}