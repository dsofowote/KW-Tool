integration.meta = {
    'sectionID' : '129060',
    'siteName' : 'Timeout Asia - (PageLead) - Smartphone - ( HK SG )',
    'platform' : 'smartphone'
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1050128',
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
        var headerHeight = $('#header').height();
        stylesCSS += '.inskinLoaded .xs-z4, .swiper-container, .xs-z1, #content, .xs-z2, .newsletterWidget{z-index: 0 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1) {z-index: 1 !important}';
        stylesCSS += '.inskinLoaded #header{z-index: 5 !important}';
        stylesCSS += '.inskinLoaded .credit-image-wrapper img{z-index: 0 !important}';
        stylesCSS += '.inskinLoaded .site-footer{padding-bottom: 0px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("#header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("#header");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment: - headerHeight,
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
