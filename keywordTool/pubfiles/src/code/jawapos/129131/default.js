integration.meta = {
    'sectionID' : '129131',
    'siteName' : 'Jawapos - Desktop - (ID)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1057587',
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
      $(".container").css({"max-width": "1000px"});
      $("header").css({
        "margin-bottom": "0px"
      });
      var headHeight = $("header").outerHeight();
      var mainHeight = $('.navbar-header').outerHeight();
      var navHeight = $('.navbar-header__info').outerHeight() + mainHeight;
      integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight,
      });
    }
});
