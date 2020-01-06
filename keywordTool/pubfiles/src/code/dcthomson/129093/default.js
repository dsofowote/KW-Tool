integration.meta = {
    'sectionID' : '129093',
    'siteName' : 'Sunday Post - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1055022',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 995,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".bar-bg").css({"background-color": "#fff"});
      $(".bar-bg > hr").css({"display": "none"});
      if ($("#sso-login-bar").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter("#sso-login-bar");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                  });
              }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $("#sso-login-bar").outerHeight();
	$(".ism-frame").parent().css({"top": headHeight});
  $(".footer").css({"max-width": "990px", "margin": "auto"});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight,
	});
});
