integration.meta = {
    'sectionID' : '129569',
    'siteName' : 'Sky Sports - (PUBLISHER BOOKING) - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1085420',
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
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow: visible}';
        stylesCSS += '.inskinLoaded body {overflow: visible}';
        stylesCSS += '.inskinLoaded .advert--banner-wrap-ghost {display: none;}';
        stylesCSS += '.inskinLoaded .site-header__body {padding-right: 0px}';
        stylesCSS += '.inskinLoaded .site-header__nav-button {transform: none; -webkit-transform: none}';
        stylesCSS += '.inskinLoaded .site-header__col4 {z-index: 9999; position: relative; width: 56px; padding-right: 14px; vertical-align: middle; }';
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
