integration.meta = {
    'sectionID' : '128749',
    'siteName' : 'Laha Mag - Smartphone - (MENA)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1033771',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    // Start of Pagelead related parameters
    'plr_FixedTop' : true,
    'plr_EnableSwipe' : true,
    // End of Pagelead related parameters
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
        var contentWidth = windowWidth - integration.custom.FrameSideRight;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .fa.fa-arrow-circle-up{right:' + integration.custom.FrameSideRight + 'px}';
        stylesCSS += '.inskinLoaded .share-bar{max-width:' + contentWidth + 'px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

 