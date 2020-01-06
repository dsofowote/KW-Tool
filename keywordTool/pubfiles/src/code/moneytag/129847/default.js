integration.meta = {
    'sectionID' : '129847',
    'siteName' : 'RFI - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089858',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("header").outerHeight();
      if ($("body > header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("body > header");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor",
              plr_PageHeightAdjustment : -headHeight
          });
      }
      $("#inskinanchor").css({
    		"top" : headHeight,
    		"position" : "relative"
    	});
      $("body, .cookie-bar ").css({"margin": "0 auto", "max-width": "1024px"});
      $("body").css({"overflow" : "visible"});
      $("#jPanelMenu-panel").css({"transform": "none"});
      $("head").append("<style>.jPanelMenu-panel{transform: none !important;}</style>");
      $("head").append("<style>#jPanelMenu-menu{z-index: 5 !important;}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".body, #wrapper-front, .cookie-bar ").css({"margin": "0"});
        }
    }
});
