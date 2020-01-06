integration.meta = {
    'sectionID' : '129102',
    'siteName' : 'Women\'s Weekly Food - Desktop - AU',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1254]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055028',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 994,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $('.header-banner').height();
      $( ".side-menu-wrapper" ).css({'overflow':'visible'});
      $('.page').css({'overflow-x':'visible'});
      if ($(".header-wrapper ").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          plr_PageHeightAdjustment: -headHeight,
          plr_ScrollAdjustment: -headHeight,
        });
      };
    }
});

integration.on("adServed", function(e) {
	var headerHeight = $('.header').height();
  $("#inskinanchor").css({
         "margin-top" : "-14px"
     });
});
