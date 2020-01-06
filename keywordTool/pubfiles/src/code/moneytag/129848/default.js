integration.meta = {
    'sectionID' : '129848',
    'siteName' : 'CNews - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089859',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("header").outerHeight();
      var topHeight = $("header").outerHeight() + $("#alert-band").outerHeight();
      if ($("header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("header");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor",
              plr_PageHeightAdjustment : -186,
              plr_ScrollAdjustment : -topHeight
          });
      }
      $("#footer-middle, #wrapper-front, #footer-post").css({"margin": "0 auto", "max-width": "960px"});
      $("#wrapper-front").css({"float": "none"});
      $("#wrapper-site").css({"overflow": "visible"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".page, #footer-middle, #footer-post, #footer-pre").css({"margin": "0"});
            $("#footer-middle, #wrapper-front, #footer-post").css({"max-width": "1000px"});
        }
    }
});
