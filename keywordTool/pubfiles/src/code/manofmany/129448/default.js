integration.meta = {
    'sectionID' : '129448',
    'siteName' : 'Man of Many - (Pagelead) - Smartphone - ( AU EA )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077864',
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
        integration.custom.indicatorPos = $('#navbar').height();
        integration.custom.closePos = $('#navbar').height();
        stylesCSS += '.inskinLoaded #viewport{float: none !important}';
        stylesCSS += '.inskinLoaded .middle-banner{display: none !important}';
        stylesCSS += '.inskinLoaded #main{padding-top: 0 !important}';
        stylesCSS += '.inskinLoaded .ism-anchor{z-index: 1000000 !important}';
        stylesCSS += '.inskinLoaded #search{position: relative; z-index: 1000000 !important}';
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
