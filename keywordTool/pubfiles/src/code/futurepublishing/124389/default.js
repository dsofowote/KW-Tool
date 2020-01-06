integration.meta = {
    'sectionID' : '124389',
    'siteName' : 'Cycling News - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1068892',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 60,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".primary-nav").outerHeight();
        if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight,
                plr_ScrollAdjustment: -headHeight
			});
        }
        $("#widgetArea0, #document-footer").css({"margin": "0 auto", "max-width": "1000px"});
        $(".slot-leaderboard").css({"display": "none"});
        $("head").append("<style> #widgetArea0 .loaded .wdyn-navbar-wrapper:after {background: unset !important;}</style>");

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#main, #widgetArea0, #document-footer").css({"margin-left": "0"});
            $(".primary-nav").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_CyclingNews/Inskin\", [728, 90]).display();\n<\\script>";
};
