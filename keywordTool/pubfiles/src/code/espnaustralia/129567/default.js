integration.meta = {
    'sectionID' : '129567',
    'siteName' : 'ESPN Cricinfo - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085469',
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
          window.unloadPageskin = function() {
              try {
                  integration.destroy();
              } catch(e) {
              };
          }

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1), .inskinLoaded .ism-indicator{z-index: 1000007 !important;}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index: 10000000 !important;}';
        stylesCSS += '.inskinLoaded .ad-banner-wrapper{display: none !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
      }

      if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
          integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
      }
  });

  integration.on("adServed", function(e) {
	var headHeight = $("#header-wrapper").height();
    $(".ism-frame").parent().css({"top" : headHeight});
    integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight
        })
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/21783347309/espn.global/inskins_passback', [320, 50]).display();\n\n<\\script>";
};

