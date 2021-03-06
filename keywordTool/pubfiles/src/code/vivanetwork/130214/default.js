integration.meta = {
    'sectionID': '130214',
    'siteName': 'Viva - Pagelead - (ID)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1107691',
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
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }

        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow: visible}';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({ 'plr_FixedTop': true, 'plr_EnableSwipe': true });
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({ "z-index": "90" });
    $('.ism-indicator').on('click', function() {
        $('.ism-anchor').toggleClass('opened');
    });
    $('head').append('<style type="text/css">.opened {z-index : 100 !important;}</style>');

})

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});