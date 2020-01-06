integration.meta = {
    'sectionID' : '129500',
    'siteName' : ' Bolalob - Smartphone - ( ID )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [320]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082615',
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
        var headHeight = $(".fixed-inner").outerHeight();
        integration.custom.SideFrame = e.data.plr_FrameSideRight;
        contentWidth = $(window).width() - integration.custom.SideFrame;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .fixed{width: ' + contentWidth +'px !important }';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_ScrollAdjustment: headHeight
          });

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});