integration.meta = {
    'sectionID' : '129094',
    'siteName' : 'SundayPost - Tablet - (UK) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1055023',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".footer").css({"max-width": "990px", "margin": "auto"});
      if ($("#sso-login-bar").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter("#sso-login-bar");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                  });
              }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $(".container").css({"max-width": "990px", "margin-left": "0px", "padding-left": "0px"});
          $(".sudeo-lanes").css({"max-width": "990px"});
          $(".sp-slide-menu").css({"width": "auto"});
          $("#sso-login-bar").css({"left": "0px"});
          $(".footer").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $("#sso-login-bar").outerHeight();
	$(".ism-frame").parent().css({"top": headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight,
	});
});
