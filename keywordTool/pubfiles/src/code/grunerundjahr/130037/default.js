integration.meta = {
    'sectionID' : '130037',
    'siteName' : 'Chefkoch - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1101182',
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
        integration.custom.FrameTop = e.data.plr_FrameTop;
        var siteWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .r-header{width: 120% !important}';
        stylesCSS += '.inskinLoaded .social-share {width: '+ siteWidth +'px !important}';
        stylesCSS += '.inskinLoaded .r-open{top: -' + integration.custom.FrameTop + 'px !important; margin-right: -' + integration.custom.FrameSideRight +'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        var headHeight = $('.r-nav').height() + $('.r-header').height();
        if ($(".r-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".r-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});