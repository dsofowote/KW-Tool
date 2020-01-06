integration.meta = {
    'sectionID' : '129057',
    'siteName' : 'La Vanguardia - Smartphone - (ES)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046809',
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
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'html.inskinLoaded, .inskinLoaded body{overflow: visible!important;}';
        stylesCSS += '.inskinLoaded .header-tags-list.visible {overflow: hidden;}';
        stylesCSS += '.inskinLoaded #header-menu-collapse, .inskinLoaded .header-logo-wrapper{width: ' + integration.custom.cw + 'px;}';
        stylesCSS += '@media only screen and (max-width: 400px) {.inskinLoaded #header-logo-url{width: 175px;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
