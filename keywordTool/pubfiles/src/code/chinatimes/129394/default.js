integration.meta = {
    'sectionID' : '129394',
    'siteName' : 'China Times - Smartphone - (TW)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076206',
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
        integration.custom.BottomFrame = e.data.plr_FrameBottom;
        var contentWidth = $(window).width() - (integration.custom.FrameSideRight +14);
        stylesCSS += '.inskinLoaded .stage-container, .ad{width:' +contentWidth + 'px !important}';
        stylesCSS += '.inskinLoaded .gotop{right:' + integration.custom.FrameSideRight + 'px !important; bottom:' + integration.custom.BottomFrame + 'px !important }';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
