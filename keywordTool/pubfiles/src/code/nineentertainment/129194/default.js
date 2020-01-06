integration.meta = {
    'sectionID' : '129194',
    'siteName' : '9 News - (Creative Approval) - (Pagelead) - Smartphone - ( AU NZ )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063267',
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
        var headerHeight = $(".site-header").height();
        stylesCSS += '.inskinLoaded .header-wrapper {z-index : unset}';
        stylesCSS += '.inskinLoaded .ism-anchor {z-index: 9999999999 !important}';
        stylesCSS += '.inskinLoaded .ism-indicator, .ism-close, .ism-anchor {top: 44px !important}';
        stylesCSS += '.inskinLoaded .widget {display: none !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
  $('.eaVkvG').on('click', function() {
      $('.ldfWxI').toggleClass('opened');
  });
  $('head').append('<style type="text/css">.opened {z-index : 99999999999 !important;}</style>');
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
