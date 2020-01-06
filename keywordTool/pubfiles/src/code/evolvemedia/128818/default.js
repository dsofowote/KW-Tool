integration.meta = {
    'sectionID' : '128818',
    'siteName' : 'Game Revolution - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072211',
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
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded header{z-index: 10!important}';
        stylesCSS += '.inskinLoaded .scrollup{right:  ' + integration.custom.PageSkinFrameSide + 'px !important; bottom: ' + integration.custom.PageSkinBottomPanel + 'px !important }';
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
