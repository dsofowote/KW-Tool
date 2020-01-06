integration.meta = {
    'sectionID' : '129591',
    'siteName' : 'Daily Star - Desktop - ( CA HK ID MY PH SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085489',
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
        $('#superbanner').css({'display':'none'});
        $(".teaser").css({"padding-left": "5px"});
        $("footer, .solo, .article-page main").css({"margin" : "0 auto", "max-width" : "1180px"});
        $("head").append("<style> #div-gpt-ad-top-slot, .top-slot {display: none !important;}</style>");
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n\n                    .display();\n\n<\\script>";
};

