integration.meta = {
    'sectionID' : '129789',
    'siteName' : 'What Culture - Desktop - (NZ)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088415',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var topNav = $(".app-top__nav").outerHeight();
      if ($("#app-header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#app-header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          plr_ScrollAdjustment : -topNav
        });
      }
      $(".vm-skin-left").css({"display": "none"});
      $(".background-overlap, .app-footer").css({"max-width": "1000px", "margin": "0 auto"});
      }
});
