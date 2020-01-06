integration.meta = {
    'sectionID' : '130155',
    'siteName' : ' Talk Talk - (News&TV Guide - ARTICLE PAGES) - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true,
};


integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        integration.custom.frameSideRight = e.data.plr_FrameSideRight
        var windowWidth = $(window).width();
        var contentWidth = windowWidth - integration.custom.frameSideRight;
        var headHeight = $('header.header').outerHeight();
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded main.page.container, .inskinLoaded .promo-banner__e2e_wrapper{max-width:' + contentWidth + 'px}';
        stylesCSS += '.inskinLoaded .ism-anchor {top:' + headHeight + 'px}';
        stylesCSS += '.inskinLoaded #topSearch {top:30px}';
        stylesCSS += '.inskinLoaded #topSearch .searchBarWrapper, .inskinLoaded #topSearch {max-width:' + contentWidth - 20 + 'px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
        $("head").append("<style>.inskinLoaded .ism-close {z-index: 10 !important;content: '' !important;width: 34px !important;height: 34px !important;border: 0 !important;box-shadow: none !important;background-color: transparent !important;background-image: url(img/close_btn_v2.svg) !important;background-size: 25px 25px !important;background-repeat: no-repeat !important;background-position: center !important;</style>}")
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adServed', function (e) {
    var headHeight = $('header.header').outerHeight();
    $('.ism-anchor').css({
        "top" : headHeight
    });
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});
