integration.meta = {
    'sectionID' : '129703',
    'siteName' : 'CTV News  - Smartphone - ( CA )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086149',
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
        stylesCSS += '.inskinLoaded .mobile-header, .content-primary, .footernav, .search {width: 300px !important}';
        stylesCSS += '.inskinLoaded #search_bar_7_339899 {width: 83% !important}';
        stylesCSS += '.inskinLoaded .dc{padding-left: 0px !important}';
        stylesCSS += '.inskinLoaded .linklist li{padding-left: 1px !important}';
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