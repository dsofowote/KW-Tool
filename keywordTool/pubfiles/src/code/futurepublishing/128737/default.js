integration.meta = {
    'sectionID' : '128737',
    'siteName' : ' Tom\'s Guide - Desktop - (INTL excl UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1033643',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.page, .z-layer-9, header.header').css({
            'max-width' : '1200px',
            'margin' : '0 auto'
        });

        $("header.header").css({
            "left" : "0px",
            "right" : "0px"
        });

        var windowWidth = $(window).width();
        var sides = (windowWidth - integration.params.plr_ContentW) / 2;

        $("head").append("<style>.jw-player-minimize > .jw-player-position{right:" + sides + "px;left:initial;}</style>");
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TomsGuide/Inskin\", [728, 90]).display();<\\script>";
};
