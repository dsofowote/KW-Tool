integration.meta = {
    'sectionID' : '129126',
    'siteName' : 'Grid - Smartphone - ( ID )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1057976',
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
        $('body').addClass('inskinLoaded');
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 250);
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .slick__content{width:' + contentWidth + 'px !important;}';
        stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded #div-gpt-ad-below-photo, .inskinLoaded #div-gpt-ad-amg-in-article, .inskinLoaded .amg-in-article-wrapper{margin-left: -20px !important;}}';
        stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded #div-Inside-MediumRectangle{margin-left: -15px !important;}}';
        stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded #div-gpt-ad-below-comment, .inskinLoaded #div-gpt-ad-mid-banner{margin-left: -10px !important;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});
