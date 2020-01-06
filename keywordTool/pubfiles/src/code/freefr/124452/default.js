integration.meta = {
  'sectionID': '124452',
  'siteName': 'Free - Desktop - (FR)',
  'platform': 'desktop'
};

integration.testParams = {
  /* No Screen Resolution check */
  'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '706212',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1280,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    if ($(".header").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter(".header");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: -63
      });
    }
    $("#cat-mediane").css({"display": "none"});
  }
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({"top": "63px"});
});
