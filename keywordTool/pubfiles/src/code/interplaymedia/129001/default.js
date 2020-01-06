integration.meta = {
    'sectionID' : '129001',
    'siteName' : 'Melbourne United - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045576',
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
        $("head").append("<style> #club-news-article #page-news {height : auto !important} html {overflow-y: unset!important}</style>");

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".container").css({
                "margin-left" : "0px"
            });

            $("body").css({
                "margin-left" : "20px",
                "width" : "initial"
            });

            $(".club-sponsors-content, .club-footer").css({
                "margin-left" : "0px"
            });

            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on('adServed', function(e){
    $("div.club-footer-section-navigation").css({
        "padding" : "50px"
    });
});
