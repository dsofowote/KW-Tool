integration.meta = {
    'sectionID': '129164',
    'siteName': 'Mothership.sg - (PageLead Only) - Smartphone - ( SG )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1061011',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({ 'plr_FixedTop': true, 'plr_EnableSwipe': true });
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

integration.on("adServed", function(e) {
    var headHeight = $(".top-nav").outerHeight();
    $(".ism-anchor").css({ "top": headHeight, "z-index": "99" });
    $('.top-nav img').on('click', function() {
        $('.ism-anchor').toggleClass('opened');
    });
    $('head').append('<style type="text/css">.opened {z-index : 0 !important;}</style>');
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight,
    });
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/80832119/inskin_mobile_passback', [[320, 50], [1, 1]]).display();\n<\\script>";
};