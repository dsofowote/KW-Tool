integration.meta = {
    'sectionID': '129232',
    'siteName': 'Urdu Point - Tablet - (UK)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1066959',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            integration.custom.edge = true;
            $("#canvas .container").css({
                "margin": "0px"
            })
        }
    }
});

integration.on('adServed', function (e) {
    $(".ism-frame").parent().css({
        "z-index": "10000"
    });

    if (integration.custom.edge) {
        $("#at-share-dock").css({
            "margin-left": "20px",
            "width": "1120px",
            "z-index": "100"
        });
    } else {
        $("#at-share-dock").css({
            "margin": "0 auto",
            "width": "1120px",
            "z-index": "100"
        });
    }

});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1001388/JPX', [1, 1]).display();\n<\\script>";
};