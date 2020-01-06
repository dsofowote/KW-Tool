integration.meta = {
    'sectionID' : '129294',
    'siteName' : 'True ID  - Smartphone - ( TH )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070905',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_EnableTelemetryDebug' : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var navHeight = $('.smart-banner ').height() + $('.wrap-noti-bar').height() ;
        var headHeight = $('.navbar').height();
        if ($(".trueid-main-nav").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter(".trueid-main-nav");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_PageHeightAdjustment : -headHeight,
                  plr_ScrollAdjustment: -navHeight
              });
          };
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        integration.custom.PageSkinBottomSide = e.data.plr_FrameBottom;
        stylesCSS += '.inskinLoaded .trueid-main-nav, .w-100{width: calc(100% + 74px) !important}';
        stylesCSS += '.inskinLoaded .cd-top, #back-top{right: ' + integration.custom.PageSkinFrameSide + 'px !important; bottom: ' + integration.custom.PageSkinBottomSide + 'px !important}';
        stylesCSS += '.inskinLoaded .ins-hamburger-menu-button{bottom: ' + integration.custom.PageSkinBottomSide + 'px !important}';
        stylesCSS += '.inskinLoaded #div-gpt-ad-rt-1 {display: none}';
        stylesCSS += '.inskinLoaded #div-gpt-ad-lb-2 {display: none}';
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
