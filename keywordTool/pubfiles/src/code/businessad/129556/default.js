integration.meta = {
    'sectionID' : '129556',
    'siteName' : 'Der Aktionär - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085458',
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
        var navWidth = $(window).width() - integration.custom.FrameSideRight;
        var headHeight = $('#header-logo-container').height();
        stylesCSS += '.inskinLoaded body{overflow-x: visible !important}';
        stylesCSS += '.inskinLoaded #header-actions-container, #share-article-nav{max-width: '+ navWidth +'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 201 !important}';
        stylesCSS += '.inskinLoaded #banner-top-container{display: none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_ScrollAdjustment : -headHeight
        });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
