integration.meta = {
    'sectionID' : '128979',
    'siteName' : 'Zee News - Smartphone- (MENA) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044275',
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
        var windowWidth = $(window).width();
        integration.custom.contentWidth = windowWidth - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style id="inskinStyles" type="text/css">';
        stylesCSS += '.inskinLoaded{padding:0px 74px 0px 0px}';
        stylesCSS += 'html{padding:0px !important;}';
        stylesCSS += '.inskinLoaded .container{max-width:' + integration.custom.contentWidth + 'px;}';
        stylesCSS += '.inskinLoaded, html, header.page-header{max-width:' + windowWidth +'px;width:' + windowWidth +'px;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
    var headerHeight = $("header.page-header").outerHeight();
    $('.ism-frame').parent().css({
        "max-width" : integration.custom.contentWidth,
        "top" : headerHeight
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

