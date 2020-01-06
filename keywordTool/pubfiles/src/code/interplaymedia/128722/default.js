integration.meta = {
    'sectionID' : '128722',
    'siteName' : 'Big Footy - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1032887',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
      if (e.data.hasSkin) {
        if ($(".tdc-header-wrap ").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter(".tdc-header-wrap ");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_ScrollAdjustment : -28,
          });
        }
      $(".wpb_wrapper, .td_block_instagram, .td-footer-wrapper, .td-sub-footer-container, #footer").css({"max-width": "1300px", "margin": "0 auto"});
      $(".td-banner-wrap-full").css({"display": "none"});
      $(".p-header, .p-body-inner, .p-sectionLinks").css({"position": "relative", "z-index": "9"});
      $("footer").css({"min-width": "1300px", "position": "relative", "z-index": "9"});
      $("body").css({"background-image": "none"});
    }
});

integration.on("adServed", function(e) {
  $(".p-footer").addClass("p-footer-inner");
  $(".p-footer-inner").css({"width": "95%", "padding": "0"});
  $(".message-footer").css({"min-width": "1074px !important"});
  $("head").append("<style>.message-footer{min-width: 1074px !important;}</style>");

});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/159808630/bigfooty.gum-gum.passback', [728, 90]).display();\n<\\script>";
};