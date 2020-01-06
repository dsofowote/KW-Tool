integration.meta = {
    'sectionID' : '129339',
    'siteName' : 'Dogtime - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072963',
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
      var headerHeight = $(".header").outerHeight();
      var leftToggle = $(window).width() - 113;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-anchor {margin-top: '+ headerHeight +'px}';
        stylesCSS += '.inskinLoaded .wrapper {padding-top: 0px }';
        stylesCSS += '.inskinLoaded .header {z-index: 3 }';
        stylesCSS += '.inskinLoaded .r1pi--toggle {left: '+ leftToggle +'px!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
    integration.base.setCfg({
      plr_PageHeightAdjustment : -headerHeight
    });
    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
