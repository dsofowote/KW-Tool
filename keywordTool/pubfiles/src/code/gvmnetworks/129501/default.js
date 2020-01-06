integration.meta = {
    'sectionID' : '129501',
    'siteName' : 'Womantalk  - Smartphone - ( ID )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [320]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082616',
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
        integration.custom.SideFrame = e.data.plr_FrameSideRight;
        contentWidth = $(window).width() - integration.custom.SideFrame;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .text-center {width: ' + contentWidth +'px !important; left: 0px !important }';
        stylesCSS += '.inskinLoaded .main-content-body {padding-left: 0px}';
        stylesCSS += '.inskinLoaded .carousel-mobile-container .carousel-mobile img {padding-right: ' + integration.custom.SideFrame +'px}';
        stylesCSS += '.inskinLoaded .convertoFloatClassAnimate {right: ' + integration.custom.SideFrame +'px !important }';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);


    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
    var headHeight = $(".nav-wrapper").outerHeight() + $(".secondary-nav-wrapper").outerHeight();
    $(".ism-anchor").css({"top": headHeight});
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
      });


  });

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});