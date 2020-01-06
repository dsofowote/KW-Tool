integration.meta = {
    'sectionID': '129447',
    'siteName': 'Man of Many - Smartphone - (AU)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1077863',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};


integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameRightPanel = e.data.plr_FrameSideRight;
        integration.custom.FrameBottomPanel = e.data.plr_FrameBottom;
        var headHeight = $('#navbar').height();
        var contentWidth = $(window).width() - integration.custom.FrameRightPanel;
        stylesCSS += '.inskinLoaded #viewport{float: none !important}';
        stylesCSS += '.inskinLoaded .middle-banner{display: none !important}';
        stylesCSS += '.inskinLoaded .mobile-footer{max-width: ' + contentWidth + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_ScrollAdjustment: headHeight
        });

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adServed', function (e) {
    $(".ism-anchor").css({
        "z-index": "1999999"
    });
    $('body').removeClass('inskinLoaded');
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});