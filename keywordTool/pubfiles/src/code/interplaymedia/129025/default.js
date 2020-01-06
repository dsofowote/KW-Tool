integration.meta = {
    'sectionID' : '129025',
    'siteName' : 'McPherson Media Group Network - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045586',
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
        var headerHeight = $("#masthead").outerHeight();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded body{min-width: ' + contentWidth +'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("#masthead").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("#masthead");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment: -headerHeight
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
