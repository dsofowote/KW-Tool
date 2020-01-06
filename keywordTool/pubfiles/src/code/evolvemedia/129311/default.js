integration.meta = {
    'sectionID' : '129311',
    'siteName' : 'ComingSoon.net - Smartphone - ( INT )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072252',
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
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.PageSkinFrameSide;
        stylesCSS += '.inskinLoaded .js-article{width: '+ contentWidth +'px !important; min-width: auto !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headerHeight = $("header").outerHeight();
        $(".ism-anchor").css({"top" :headerHeight });
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headerHeight
          })
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
