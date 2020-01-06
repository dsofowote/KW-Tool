integration.meta = {
    'sectionID' : '129521',
    'siteName' : 'Affarsvarlden - Smartphone - ( SE )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085430',
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
        stylesCSS += '.inskinLoaded .nav-button {margin-right: 0px}'
        stylesCSS += '.inskinLoaded .at-container {padding: 0 5px}'
        stylesCSS += '.inskinLoaded .head-indicator-single {margin-left: 5px}'
        stylesCSS += '.inskinLoaded .share-nav-container {max-width: calc(100% - 74px)}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e){
    $('.nav-button').on('click', function() {
        $('#canvas').toggleClass('opened');
        $('html').toggleClass('openedhtml');
      });
      $('head').append('<style type="text/css">.opened {top : -120px !important;}</style>');
      $('head').append('<style type="text/css">.openedhtml {padding-right : 0px !important;}</style>');
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

