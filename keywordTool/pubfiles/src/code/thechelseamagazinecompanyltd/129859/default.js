integration.meta = {
    'sectionID' : '129859',
    'siteName' : 'Wedding Ideas - Smartphone - (UK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1093673',
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
        var navHeight = $('.td-header-menu-wrap').height();
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        stylesCSS += '.inskinLoaded #td-mobile-nav{width: 125% !important}';
        // stylesCSS += '.inskinLoaded .td-pb-row{display: none !important}';
        stylesCSS += '.inskinLoaded .td-menu-socials-wrap{background-color: black !important}';
        stylesCSS += '.inskinLoaded .td-search-background{top: 0 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        $('head').append('<style>.pb-stream-sticky-on{right:'+ integration.custom.PageSkinRightPanel + 'px !important}</style>');
        integration.base.setCfg({
            plr_ScrollAdjustment : navHeight
        });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});