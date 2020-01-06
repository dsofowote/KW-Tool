integration.meta = {
  'sectionID': '129346',
  'siteName': 'LiveOutdoors - Desktop - (INT)',
  'platform': 'desktop'
};

integration.testParams = {
  'desktop_resolution': [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId': '1072970',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1000,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    if ($(".container-header").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter(".container-header");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor"
      });
    }
  }
});

integration.on("adServed", function(e) {
  var headHeight = $(".container-header").outerHeight();
    $(".ism-anchor").css({"top": headHeight});
    $(".top-search.expanded").css({"right": 0});
    integration.base.setCfg({
      plr_PageHeightAdjustment : -headHeight,
      plr_ScrollAdjustment : -headHeight
    });
});
