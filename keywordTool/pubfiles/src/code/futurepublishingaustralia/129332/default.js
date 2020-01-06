integration.meta = {
    'sectionID': '129332',
    'siteName': 'Cycling News - Desktop - ( AU )',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1072732',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".global-banner").outerHeight() + $(".top-navbar-wrap").height();
        $(".nav-panel, .major-races, .feedback-bar, .global-footer, .center-container, .live-ticker, .fixedNav, .bottom-navbar-wrap").css({ "max-width": "1000px", "margin": "0 auto" });
        $(".global-banner").css({ "display": "none" });
        $(".bottom-navbar-wrap").css({ "left": "auto" });
      }
});

    

/* Passback Tag */
window.ISMPassback = function() {
return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_CyclingNews/Inskin\", [728, 90]).display();\n<\\script>";
    };
