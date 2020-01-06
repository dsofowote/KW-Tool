integration.meta = {
  'sectionID': '129493',
  'siteName': 'Raider - Tablet - (INT) ',
  'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId': '1082486',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1360,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    $('body').addClass('inskinLoaded');
    $(".sticky-outer-wrapper").css({
      "margin": "0 auto",
      "max-width": "1360px"
    });
    $("#application").css({
      "height": "auto"
    });
    if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
      $("#application").css({
        "margin-left": "0",
        "width": "1360px"
      });
      integration.base.setCfg({
        'plr_PageAlignment': 'left'
      });
    }
    window.unloadPageskin = function() {
      try {
        integration.destroy();
      } catch (e) {}
    };
  }
});
