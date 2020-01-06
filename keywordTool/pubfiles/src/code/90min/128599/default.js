integration.meta = {
    'sectionID' : '128599',
    'siteName' : 'Dexerto - Tablet - ( INT exc. UK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1025313',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1150,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".mx-auto, .mw4.mx-auto").css({
                "margin-left" : "0px"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/175840252/MMPlus/Dexerto/Passback/Mobile/320x50', [[320,50]])\n                    .setTargeting('Passback', ['InSkin'])\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n                    .display();\n<\\script>";
};
