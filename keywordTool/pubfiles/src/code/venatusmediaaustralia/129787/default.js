integration.meta = {
    'sectionID' : '129787',
    'siteName' : 'What Culture - Smartphone - (APAC)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088413',
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
        stylesCSS += '.inskinLoaded .app-header{width: 125% !important}';
        stylesCSS += '.inskinLoaded header{z-index: 1000001 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3), .ism-frame:nth-of-type(2){z-index: 1000000 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("#app-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#app-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});