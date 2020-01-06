integration.meta = {
  'sectionID': '129445',
  'siteName': 'Man of Many - Desktop - (AU) ',
  'platform': 'desktop'
};

integration.testParams = {
  'desktop_resolution': [1480]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '1077861',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1220,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
  if (e.data.hasSkin) {
    if ($("#masterhead").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("#masterhead");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: -63
      });
    }
    $("#viewport").css({
      "float": "none"
    });
    window.inskinCallback = function (callback) {
      $('html').addClass('inskinCallback');
      callback();
    }

    window.inskinCallback(refreshSliders);
  }
});