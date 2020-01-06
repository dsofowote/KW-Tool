integration.meta = {
    'sectionID' : '129073',
    'siteName' : 'The Urban List - Smartphone - ( AU NZ )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047523',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var bodyWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded body{min-width: ' + bodyWidth +'px !important}';
        stylesCSS += '.inskinLoaded #content-container{padding-bottom: 0px !important; position: relative !important}';
        stylesCSS += '.inskinLoaded .primary-footer{padding-bottom: 0px !important}';
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
