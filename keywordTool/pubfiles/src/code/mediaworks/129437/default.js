integration.meta = {
    'sectionID' : '129437',
    'siteName' : 'Projekmm - Smartphone - ( MY SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1077477',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.FrameBottomPanel = e.data.plr_FrameBottom;
        var sideWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .trending-bar{max-width: '+ sideWidth +'px !important; bottom: '+ integration.custom.FrameBottomPanel  +'px !important}';
        stylesCSS += '.inskinLoaded #google_ads_iframe_/32246135/pm-story-320x100_0__container__, #google_ads_iframe_/32246135/pm-story-mreg-1_0__container__{max-width: 300px !important}';
        stylesCSS += '.inskinLoaded #pm-story-320x100{z-index: 0 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
