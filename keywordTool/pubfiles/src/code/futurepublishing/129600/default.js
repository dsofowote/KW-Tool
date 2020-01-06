integration.meta = {
    'sectionID': '129600',
    'siteName': 'Live Science - Tablet - (UK) ',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1085921',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($("nav.primary-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("nav.primary-nav");
            var headHeight = $(".primary-nav").outerHeight();
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight
            });
        }

        $(".slot-leaderboard").css({
            "height": "0px"
        });

        $("#document-footer").css({
            "margin": "0 auto",
            "max-width": "1020px"
        });

        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".primary-nav, #document-footer, #main").css({
                "margin-left": "0"
            });
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function () {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_LiveScience/Inskin\", [728, 90]).display();\n<\\script>";
};