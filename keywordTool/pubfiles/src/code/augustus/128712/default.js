integration.meta = {
    'sectionID' : '128712',
    'siteName' : 'Lovin Dubai - Smartphone - (AE) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1032713',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        integration.custom.ww = $(window).width();
        integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .c-cookie{width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += '@media only screen and (max-width: 400px){.inskinLoaded .social-link__item svg{width: 1rem;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});


integration.on("adServed", function(e) {
    var headHeight = $(".c-header__container").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
