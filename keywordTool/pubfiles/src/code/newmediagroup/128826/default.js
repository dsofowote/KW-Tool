integration.meta = {
    'sectionID' : '128826',
    'siteName' : 'Plastic Hub Daily - Smartphone - (HK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1036002',
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
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var contentWidth = $(window).width() - integration.custom.FrameSideRight;
      var headHeight = $(".header_bg").outerHeight();
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page {overflow: visible!important}';
        stylesCSS += '.inskinLoaded .footer_show {max-width: '+ contentWidth +'px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".header_bg").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header_bg");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
    }
    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});
integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('#inskinanchor').remove();
});
