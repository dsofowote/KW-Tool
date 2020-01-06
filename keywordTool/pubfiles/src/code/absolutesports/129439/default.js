integration.meta = {
    'sectionID' : '129439',
    'siteName' : 'Sportskeeda - Smartphone - ( IN )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077595',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameRightPanel = e.data.plr_FrameSideRight;
        var headHeight = $('.masthead').height();
        var contentWidth = $(window).width() - integration.custom.FrameRightPanel ;
        stylesCSS += '.inskinLoaded .masthead{width: 125%!important}';
        stylesCSS += '.inskinLoaded .img_ad, #div-gpt-ad-1546862184774-0, .sticky-container{max-width: '+ contentWidth +'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".masthead").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".masthead");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : headHeight
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
