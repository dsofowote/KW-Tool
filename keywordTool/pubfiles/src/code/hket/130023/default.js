integration.meta = {
    'sectionID' : '130023',
    'siteName' : 'HKET - Smartphone - (HK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100305',
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
        var headHeight = $('.sticky-header').height();
        integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight - 30;
        integration.custom.PageSkinSidePanel1 = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.PageSkinSidePanel;
        stylesCSS += '.inskinLoaded .back-to-top-menu{right:'+ integration.custom.PageSkinSidePanel1  + 'px !important}';
        stylesCSS += '.inskinLoaded .back-to-top-button, .floating-share-menu-container{right:'+ integration.custom.PageSkinSidePanel  + 'px !important}';
        stylesCSS += '.inskinLoaded header, .header-wrapper, #body-wrapper, .hket-ui{min-width:unset !important}';
        stylesCSS += '.inskinLoaded .main-component:before, .header-ad {display:none !important}';
        // stylesCSS += '.inskinLoaded .sticky-top-menu-area{width:375px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 901!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_ScrollAdjustment : 80
    })
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});