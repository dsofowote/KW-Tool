integration.meta = {
    'sectionID' : '129357',
    'siteName' : 'Reality Tea - Smartphone - (INT) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1073933',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        integration.custom.ww = $(window).width();
        integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .cp{width: ' + integration.custom.cw + 'px!important;}';
        stylesCSS += '.inskinLoaded .carousel-item{width: calc((' + integration.custom.cw + 'px - 10px) / 2)!important;}';
        stylesCSS += '.inskinLoaded .scrollup{z-index:3; right: ' + integration.custom.PageSkinRightPanel + 'px!important;}';
        stylesCSS += '.inskinLoaded .footer{float: none; display: block;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".main-header").outerHeight();
    $(".ism-frame").parent().css({
        "z-index" : "5",
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
