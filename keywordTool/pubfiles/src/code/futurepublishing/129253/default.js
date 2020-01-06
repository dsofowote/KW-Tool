integration.meta = {
    'sectionID' : '129253',
    'siteName' : 'Cycling News - Smartphone - (UK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1068893',
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
      var headHeight = $(".nav-panel").outerHeight();
      if ($(".nav-panel").length == 1) {
        $("<div id='inskinanchor'></div>").insertBefore(".nav-panel");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor",
          });
      }

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page-canvas {margin-top: 0px !important}';
        stylesCSS += '.inskinLoaded .global-banner{display: none !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $(".nav-panel").outerHeight();
      $(".ism-frame").parent().css({"margin-top" :headHeight });
      integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight,
        })
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n googletag.pubads().definePassback(\"/10518929/Passback_CyclingNews/Inskin\", [320, 50]).display();\n<\\script>";
};
