integration.meta = {
    'sectionID' : '130024',
    'siteName' : 'TOPick - Smartphone - (HK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100306',
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
        var contentWidth = $(window).width() - integration.custom.PageSkinSidePanel;
        stylesCSS += '.inskinLoaded .back-to-top-button{right:'+ integration.custom.PageSkinSidePanel  + 'px !important}';
        stylesCSS += '.inskinLoaded .main-component:before{display:none !important}';
        stylesCSS += '.inskinLoaded .floating-share-menu-container{bottom:53px !important}';
        stylesCSS += '.inskinLoaded header, .header-wrapper, #body-wrapper{min-width:unset !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_ScrollAdjustment : headHeight
        })
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
