integration.meta = {
    'sectionID' : '128640',
    'siteName' : 'Traveller - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028292',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($(".nav--primary__wrap").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".nav--primary__wrap");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_PageHeightAdjustment : -156,
                      plr_ScrollAdjustment : -96
                  });
              }
      $("#footer").css({
        "width" : "980px",
        "margin" : "0 auto"
      });
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "  <script type=\"text/javascript\">\n    <!--\n    google_ad_client = \"ca-pub-8027655917349410\";\n    /* AdX InSkin PageSkin Passback - Traveller */\n    google_ad_slot = \"InSkinPB-Traveller\";\n    google_ad_width = 728;\n    google_ad_height = 90;\n    //-->\n  <\\script>\n  <script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n  <\\script>";
};
