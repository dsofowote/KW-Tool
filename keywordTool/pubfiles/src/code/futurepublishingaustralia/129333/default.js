integration.meta = {
    'sectionID' : '129333',
    'siteName' : 'Cycling News - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072733',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 60
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".global-banner").outerHeight() + $(".top-navbar-wrap").height();
      $(".nav-panel, .page-wrapper, .major-races, .feedback-bar, .global-footer, .center-container, .live-ticker").css({"max-width":"1000px", "margin": "0 auto"});
      $(".global-banner").css({"display": "none"});

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".nav-panel, .major-races, .page-wrapper, .feedback-bar, .global-footer, .live-ticker").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n googletag.pubads().definePassback(\"/10518929/Passback_CyclingNews/Inskin\", [728, 90]).display();\n<\\script>";
};
