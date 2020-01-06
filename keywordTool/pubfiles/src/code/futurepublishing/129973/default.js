integration.meta = {
    'sectionID' : '129973',
    'siteName' : 'Toms Guide - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1098944',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $(".primary-nav, .slot-leaderboard, #document-footer").css({
            "max-width": "970px",
            "margin": "0 auto"
        });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            $(".primary-nav, .slot-lightbox1, #main, #document-footer").css({
                "max-width": "970px",
                "margin-left": "0px"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TomsGuide/Inskin\", [728, 90]).display();<\\script>";
};
