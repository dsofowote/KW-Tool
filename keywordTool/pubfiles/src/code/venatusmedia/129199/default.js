integration.meta = {
    'sectionID' : '129199',
    'siteName' : 'What Culture - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063458',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_ScrollAdjustment' : -35,
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .app-header {z-index : 99999999}';
        stylesCSS += '.inskinLoaded .app-top__item {padding-left : 0.430rem !important; padding-right : 0.430rem !important}';
        stylesCSS += '.inskinLoaded .app-dropdown-menu::before {width : 100%}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	    $(".ism-frame").parent().css({"z-index" : "9999999"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
