integration.meta = {
    'sectionID' : '128972',
    'siteName' : 'Focus - (Pagelead) - Smartphone - ( AT CH DE )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044190',
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
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:-9px !important;z-index:10000}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index:10004 !important}';
        stylesCSS += '.inskinLoaded .ism-indicator-r{top:75% !important;z-index:10000 !important}';
        stylesCSS += '.inskinLoaded .menu_list{z-index:10002}';
        stylesCSS += '.inskinLoaded .head_focus{z-index:10003}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

