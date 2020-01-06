integration.meta = {
    'sectionID' : '130013',
    'siteName' : 'Women\'s Health - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1510]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099524',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1250,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : '45'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".Header, .VideoWatch-Driver-Wrapper, .Footer").css({"margin": "0 auto", "max-width": "1250px"});
        $('head').append('<style type="text/css">.RelatedContent {margin: 0 auto !important ; max-width: 1250px !important}</style>');
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().definePassback('/60035833/PAC/womens_health', [[1,1]])\n\n.setTargeting('passback', ['inskin'])\n\n.setTargeting('position', ['2'])\n\n.setTargeting('pagenumber', ['1'])\n\n.setClickUrl('%%CLICK_URL_UNESC%%')\n\n.display();\n\n<\\script>";
};
