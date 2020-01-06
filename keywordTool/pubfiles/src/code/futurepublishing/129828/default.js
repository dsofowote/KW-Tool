integration.meta = {
    'sectionID' : '129828',
    'siteName' : 'Top Ten Reviews - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089520',
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
        var headHeight = $('.primary-nav').height();
        stylesCSS += '.inskinLoaded .primary-nav{min-width: 375px; width: 100%}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2), .ism-frame:nth-of-type(3){z-index: 9996 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".primary-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight ,
                plr_ScrollAdjustment: -headHeight

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