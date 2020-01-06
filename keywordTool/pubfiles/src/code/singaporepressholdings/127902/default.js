integration.meta = {
  'sectionID': '127902',
  'siteName': 'Game Axis - (Creative Approval) - Desktop - ( SG )',
  'platform': 'desktop'
};

integration.testParams = {
  'desktop_resolution': [1320]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '933194',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1060,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_PageHeightAdjustment': -20
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    if ($("body > iframe.sphmmn_bar").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("body > iframe.sphmmn_bar");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: -59,
        plr_StartScrollOnAnchor: true
      });
    }
  }
});
