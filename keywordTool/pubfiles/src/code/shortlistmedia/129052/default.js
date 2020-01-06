integration.meta = {
    'sectionID' : '129052',
    'siteName' : 'Stylist.co.uk - Desktop - ( US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1390]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046804',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1130,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".css-4cvwva").outerHeight();
      var headHeight2 = $(".css-xhvecb").outerHeight();
      if ($(".css-4cvwva").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".css-4cvwva");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -headHeight
                  });
              } else {
                $("<div id='inskinanchor'></div>").insertBefore(".css-1c3h18e");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_PageHeightAdjustment : -headHeight2
                });
              }
      $(".css-1c3h18e").css({"max-width": "1130px", "margin": "auto"});
      $(".css-ec2xzo, .css-9ppisi").css({"width": "1130px", "margin": "auto"});
      $(".css-9ppisi").css({"width": "1130px", "margin": "auto", "min-width": "unset"});
      $(".css-lfro5o").css({"display": "none"});
      $(".css-wpsfr6").css({"margin-left": "-185px"});
      $(".css-z06ei").css({"padding-left": "0", "padding-right": "0"});
    }
});
