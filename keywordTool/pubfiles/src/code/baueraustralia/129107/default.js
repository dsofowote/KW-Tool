integration.meta = {
    'sectionID' : '129107',
    'siteName' : 'Gourmet Traveller - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055030',
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
        var headHeight = $('.header').height();
        stylesCSS += '.inskinLoaded .page{overflow-x: visible}';
        stylesCSS += '.inskinLoaded .side-menu-wrapper{overflow: visible}';
        stylesCSS += '.inskinLoaded .header-search--icon-container{height: 50px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".header-wrapper").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment: - headHeight,
          });
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('body').remove('#inskinanchor');
});
