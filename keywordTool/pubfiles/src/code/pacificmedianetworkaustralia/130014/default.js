integration.meta = {
    'sectionID' : '130014',
    'siteName' : 'Women\'s Health - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099525',
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
        $(".Header").css({"margin": "0 auto", "max-width": "1250px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".PageWrap").css({"max-width": "1250px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().definePassback('/60035833/PAC/womens_health', [[1,1]])\n\n.setTargeting('passback', ['inskin'])\n\n.setTargeting('position', ['2'])\n\n.setTargeting('pagenumber', ['1'])\n\n.setClickUrl('%%CLICK_URL_UNESC%%')\n\n.display();\n\n<\\script>";
};

