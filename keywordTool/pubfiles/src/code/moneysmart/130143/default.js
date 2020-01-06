integration.meta = {
    'sectionID' : '130143',
    'siteName' : 'Money Smart - (Smartphone) - SG',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104787',
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
        var headHeight = $('.header-wrapper').height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var sideWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .ism_wrap, .float-mobile-view{width: ' + sideWidth + 'px !important}';
        stylesCSS += '.inskinLoaded .header-wrapper{width: max-content !important}';
        stylesCSS += '.inskinLoaded .mm-menu{z-index: 1 !important}';
        stylesCSS += '.inskinLoaded #go-top-button{right: ' + integration.custom.FrameSideRight + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 100000 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".header-wrapper").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});