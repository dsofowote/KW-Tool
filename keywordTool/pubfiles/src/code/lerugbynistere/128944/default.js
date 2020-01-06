integration.meta = {
    'sectionID' : '128944',
    'siteName' : 'Le Rugbynistere - Smartphone - (FR) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043082',
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
      if ($(".navbar-header").length == 1) {
          var headHeignt = $(".navbar-header").height();
          integration.base.setCfg({
              plr_ScrollAdjustment : headHeignt
            });
        };
        $('body').addClass('inskinLoaded');
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .back-top {right : 80px!important; bottom : 6.5rem!important}';
        stylesCSS += '.inskinLoaded {margin-top:0px!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('html').removeClass('inskinLoaded');
});
