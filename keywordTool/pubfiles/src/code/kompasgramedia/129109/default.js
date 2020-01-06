integration.meta = {
    'sectionID' : '129109',
    'siteName' : 'Kompas - Smartphone - ( ID )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055495',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var navHeight = $('.new-sub-menu').height();
        var bannerHeight = $('.banner1').outerHeight();
        var shareHeight = $('.floating-share').height();
        var headHeight = $('.header').height() + navHeight + bannerHeight + shareHeight + 8;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page1{position: relative ; overflow: visible}';
        stylesCSS += '.inskinLoaded .sticky-ads, .sticky-mobile-r{z-index: -1}';
        stylesCSS += '.inskinLoaded .sticky-mobile-r{z-index: -1}';
        stylesCSS += '.inskinLoaded .header{top: 0}';
        stylesCSS += '.inskinLoaded .new-sub-menu{top: 55px}';
        stylesCSS += '.inskinLoaded .premium_show_banner{top: 256px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 10000 !important}';

        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".content_article").length == 1) {
          $("<div id='inskinanchor'></div>").insertBefore(".content_article");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment: - headHeight,
            // plr_ScrollAdjustment: -headHeight,
          });
          $("#inskinanchor").css({
              "top" : headHeight,
              "position" : "relative"
            });
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
