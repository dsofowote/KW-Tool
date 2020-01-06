integration.meta = {
    'sectionID' : '129531',
    'siteName' : 'Supercars - (Creative App) - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085440',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .page-inner {z-index: 0}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.custom.pl_behaviour = "scroll";
        integration.custom.pl_scroll = 50;
        integration.custom.indicatorPos = 55;
        integration.custom.closePos = 55;
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
          $('.cd-header-buttons').on('click', function() {
            $('.ism-anchor').toggleClass('opened');
          });
          $('.cd-overlay').on('click', function() {
            $('.ism-anchor').toggleClass('opened');
          });
          $('head').append('<style type="text/css">.opened {z-index : 0;}</style>');

    });



integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

