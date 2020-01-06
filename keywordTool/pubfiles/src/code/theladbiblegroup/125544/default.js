integration.meta = {
  "sectionID": "125544",
  "siteName": "TheSportsBible",
  "publisher": "65twenty",
  "platform": "tablet"
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '681739',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1280,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_FastInit': true
};

integration.on('adCallResult', function (e) {
  if (e.data.hasSkin) {
    $("html").addClass("skin__opt--three");
    $('section, footer').css({
      "max-width": "1280px",
      "margin": "0 auto"
    });
    $('header').css({
      "max-width": "1280px",
      "min-width": "1280px",
      "margin": "0 auto"
    });
    $('.container.promo--container.promo--editors-picks').css({
      "max-width": "1200px",
      "margin": "0 auto"
    });
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      /* PageSkin Edge specific changes */
      integration.base.setCfg({
        'plr_PageAlignment': 'left'
      });
      $('body').css({
        "overflow-x": "visible"
      });
      $('header, section, footer').css({
        "margin": "0"
      });
      integration.custom.isEdge = true;
    }
  }
});

integration.on('layoutChange', function (e) {
  integration.custom.FrameBottom = e.data.plr_FrameBottom;
  integration.custom.FrameSide = e.data.plr_FrameSide;
  $("head").append("<style>body{overflow-y: hidden !important; padding-bottom: " + integration.custom.FrameBottom + "px;}</style>");
  if (integration.custom.isEdge) {
    $("head").append("<style>body{margin-left: 0 !important; padding-left: " + integration.custom.FrameSide + "px !important;}</style>");
  }
});

integration.on("adServed", function (e) {
  $(".ism-frame").parent().css({
    "z-index": "10"
  });
});

/* Passback Tag */
window.ISMPassback = function () {
  return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback('/8493129/Passback_TSB_Landscape_1',[[728, 90], [970, 250]]).setTargeting(\"passback\", \"Inskin-TSB-UK-Tablet-SL1\").display();\n<\\script>";
};