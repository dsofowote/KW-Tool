integration.meta = {
    'sectionID' : '126741',
    'siteName' : 'The Sun - (SSL) - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '707823',
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
        if ($(".sun-header--nav").length == 1) {
                    $("<div id='inskinanchor'></div>").insertAfter(".sun-header--nav");
                    var headHeight = $(".sun-header--nav").outerHeight(true);
                    var headHeight2 = $(".sun-header--wrap").outerHeight();
                    $("#inskinanchor").css({"margin-top" : headHeight});
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",
                        plr_PageHeightAdjustment : -headHeight,
                        plr_ScrollAdjustment : -headHeight2
                    });
                }
                else {
                  $("<div id='inskinanchor'></div>").insertAfter(".header");
                  var headHeight = $(".header").outerHeight();
                  $("#inskinanchor").css({"margin-top" : headHeight});
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -headHeight
                  });
                }
        if ($(".carousel-links").length == 1) {
                  $("<div id='inskinanchor'></div>").insertBefore("#main-content");
                  var headHeight = $(".header").height() + $(".carousel-links").height();
                  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
                  var contentW = $(window).width() - integration.custom.FrameSideRight;
                  $("#inskinanchor").css({"margin-top" : headHeight});
                  $(".article-carousel-container").css({"padding-top" : "0px"});
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -headHeight
                  });
                };
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #main-content {padding-top : 0px}';
        stylesCSS += '.inskinLoaded .sub-nav__mobile-head {top : 0px; margin-bottom: 0px;}';
        stylesCSS += '.inskinLoaded {overflow : visible !important}';
        stylesCSS += '.inskinLoaded .billboard, .inskinLoaded .aic-sticky_banner {z-index : 48 !important}';
        stylesCSS += '.inskinLoaded .carousel__nav__button {right : 74px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        window.unloadPageskin = function () {
          try {
            integration.destroy();
            $('body').removeClass('inskinLoaded');
            $("#inskinanchor").remove();
          } catch (e) {}
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({"z-index" : "49"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});
