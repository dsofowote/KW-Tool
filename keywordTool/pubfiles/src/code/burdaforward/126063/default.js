integration.meta = {
  'sectionID': '126063',
  'siteName': 'Netmoms Desktop',

  'platform': 'desktop',
  'restrictions': ''
};

integration.testParams = {
  'desktop_resolution': [1360]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '707239',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1040,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_FastInit': true

};


integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
      var headHeight = $(".siteHeader--fixed").height();
    if ($(".siteHeader--fixed").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter(".siteHeader--fixed");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: -headHeight,
        plr_ScrollAdjustment: headHeight
      });
    }
    $(".sticky-wrapper--social-sharing").hide();
    $("head").append("<style>.sticky-wrapper--social-sharing{display : none !important;}</style>");
  }
});

integration.on('adServed', function(e) {
    var headHeight = $(".siteHeader--fixed").outerHeight();
  if ($(".siteHeader--fixed").length > 1) {
  $(".ism-anchor").css({"top": "57px"});
  }
});
