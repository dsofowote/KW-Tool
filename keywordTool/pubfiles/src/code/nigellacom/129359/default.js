integration.meta = {
    'sectionID': '129359',
    'siteName': 'BFI - SMARTPHONE - (UK)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1073935',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        integration.custom.ww = $(window).width();
        integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page_top{width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += 'body.inskinLoaded > .footer {position: relative;}';
        stylesCSS += '.inskinLoaded .bfi-homepage-carousel, .inskinLoaded #sliding-popup{width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += '.inskinLoaded #sliding-popup{left:0; width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += '.inskinLoaded .bfi-homepage-carousel .bfi-homepage-carousel-caption{width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += '.inskinLoaded. royalSlide{width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += '.inskinLoaded .bfi-homepage-carousel{margin-left: -20px!important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        $("#mobile-nav-icon").click(function (event) {
            $("#mobile-nav").collapse('hide');
        });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/28749\"><\\script>";
};