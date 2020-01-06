integration.meta = {
    'sectionID' : '129768',
    'siteName' : 'Swellnet - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087631',
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
        var headHeight = $('.global-header').height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        stylesCSS += '.inskinLoaded .btn-back-top{right: ' + integration.custom.FrameSideRight + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 1000 !important}';
        stylesCSS += '.inskinLoaded .global-sponsor {display: none !important}';

        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".global-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".global-header");
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