integration.meta = {
  'sectionID': '128704',
  'siteName': 'Zero Tackle - Tablet - (AU) ',
  'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '1030963',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1080,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    if ($(".td-header-wrap").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter(".td-header-wrap");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: -126
      });
    }

    $(".td-main-content-wrap").css({
      "max-width": "1080px",
      "margin": "0 auto",
      "padding-top": "30px"
    });

    $("#td-outer-wrap").css({
      "overflow": "visible"
    });

    $(".td-header-sp-recs").hide();

    if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
      $(".td-main-content-wrap, .td-container").css({
        "margin-left": "0px"
      });
      $(".match-centre-header").css({
        "margin-left": "40px"
      });
      $(".td-menu-background").css({
        "z-index": "0"
      });
      integration.base.setCfg({
        'plr_PageAlignment': 'left'
      });
    }
  }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/135062774/zerotackle', [728, 90]).display();\n<\\script>";
};