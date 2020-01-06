integration.meta = {
    'sectionID' : '130216',
    'siteName' : 'Huffington Post - Smartphone - (ES)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1110982',
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
        stylesCSS += '.inskinLoaded #masthead, .inskinLoaded .stickyNav{width: ' + integration.custom.cw + 'px!important; margin-left:0px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
