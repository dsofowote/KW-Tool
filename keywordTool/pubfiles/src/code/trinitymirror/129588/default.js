integration.meta = {
    'sectionID' : '129588',
    'siteName' : 'Daily Star - Tablet - ( INT exc. ASIA AU IE UK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1085498',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#superbanner').css({'display':'none'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#innercontainer").css({"max-width": "980px", "margin-left": "0"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n\n                    .display();\n\n<\\script>";
};
