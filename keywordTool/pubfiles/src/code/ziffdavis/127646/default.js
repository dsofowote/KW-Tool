integration.meta = {
    'sectionID' : '127646',
    'siteName' : 'Everyday Health - Smartphone - ( UK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1035954',
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
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var contentWidth = $(window).width() - integration.custom.FrameSideRight;
      var windowW = $(window).width();
      var headHeight = $(".eh-header").outerHeight();
      if ($(".header-container").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header-container");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #_evh-link {right: 75px!important}';
        stylesCSS += '.inskinLoaded .header-container {width: '+ windowW +'px!important}';
        stylesCSS += '.inskinLoaded .secondary-slider__slide {width: '+ contentWidth +'px!important}';
        stylesCSS += '.inskinLoaded .container {padding: 0px 3px !important}';
        stylesCSS += '.inskinLoaded .col-xs-6 {padding: 0px 10px !important}';
        stylesCSS += '.inskinLoaded .secondary-slider__direction-nav {padding-left: 0px!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

integration.on("adServed", function(e) {
    var headHeight = $(".eh-header").outerHeight();
    var header = $(".header-container").outerHeight();
      if (header == 0) {
        $(".ism-frame").parent().css({
            "top" : headHeight
        });
      };
      if ($(".header-container").length < 1) {
        $(".ism-frame").parent().css({
            "top" : headHeight
        });
      };

    integration.base.setCfg({
      plr_PageHeightAdjustment : -headHeight,
    });
});

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        console.log("format check", e.data.format);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
