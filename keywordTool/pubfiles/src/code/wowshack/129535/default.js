integration.meta = {
    'sectionID' : '129535',
    'siteName' : 'Wowshack - Smartphone - ( AU ID MY SG US )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085450',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_GetContentHeightVersion' : 2,
    'plr_ScrollAdjustment' : 60,
    'plr_ForceFrameBottom' : 0,
    'plr_PageHeightAdjustment' : -1
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {padding-top: 0px !important}';
        stylesCSS += '.inskinLoaded span.mvp-nav-search-but {margin-left: 0px}';
        stylesCSS += '.inskinLoaded #mvp-logo-nav {margin: 0px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

