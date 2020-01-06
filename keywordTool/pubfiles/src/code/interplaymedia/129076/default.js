integration.meta = {
    'sectionID' : '129076',
    'siteName' : 'Zero Us Sports - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1048326',
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
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        var headerHeight = $('.td-header-wrap').height();
        var bannerHeight = $('.td-banner-wrap-full').height();
        stylesCSS += '.inskinLoaded #google_image_div{width: ' + contentWidth +'px !important}';
        stylesCSS += '.inskinLoaded #td-outer-wrap{overflow: visible}';
        stylesCSS += '.inskinLoaded .td-post-sharing-top{position: relative; left: -10px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".td-header-wrap").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter(".td-header-wrap");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment: -headerHeight,
            plr_ScrollAdjustment:  -bannerHeight

          });
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('body').remove('#inskinanchor');
});
