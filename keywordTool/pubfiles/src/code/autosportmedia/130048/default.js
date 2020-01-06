integration.meta = {
    'sectionID' : '130048',
    'siteName' : 'Motorsport - Smartphone - (IT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1101510',
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
        var headHeight = $('.ms-topbox-header').height();
        stylesCSS += '.inskinLoaded .root{overflow: visible !important}';
        stylesCSS += '.inskinLoaded .ms-topbox-header{width: 120% !important}';
        stylesCSS += '.inskinLoaded .ms-footer_top{width: 83% !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".ms-topbox-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".ms-topbox-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
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