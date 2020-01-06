integration.meta = {
    'sectionID' : '129604',
    'siteName' : 'Daily Star - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1085999',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',

    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageScanExclude' : ' #utility-links, .mod-header, #header-dropdown, #outbrainFooterArticleSlot, .top-stories '
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var headHeight = $("#topSocialPanel").outerHeight();
        stylesCSS += '.inskinLoaded .row{min-width: 0; max-width: 375px}';
        stylesCSS += '.inskinLoaded .breaking-news{width: 80% !important; margin: 0 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("#topSocialPanel").length == 1) {
            integration.base.setCfg({
                plr_ScrollAdjustment: headHeight,
                });
        }

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});



integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[320,50]])\n\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n\n                    .display();\n\n<\\script>";
};