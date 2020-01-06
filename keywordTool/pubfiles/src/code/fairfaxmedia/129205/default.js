integration.meta = {
    'sectionID' : '129205',
    'siteName' : 'Essential Kids AU - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063876',
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
        var headHeight = $('.header-wrap').height();
        stylesCSS += '.inskinLoaded #nav--primary__wrap{top: '+ headHeight +'px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".header-wrap").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header-wrap");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('body').remove('inskinanchor');
});
