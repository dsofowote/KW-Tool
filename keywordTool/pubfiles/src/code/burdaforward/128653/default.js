integration.meta = {
    'sectionID' : '128653',
    'siteName' : 'Instyle - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028324',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 60
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var windowWidth = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = windowWidth - integration.custom.FrameSideRight;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .instagram-media{max-width:' + (contentWidth - 5) + 'px !important;position:relative;right:20px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

