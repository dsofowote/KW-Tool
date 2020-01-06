integration.meta = {
    'sectionID' : '128646',
    'siteName' : 'Good Food - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028298',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
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
                      plr_PageHeightAdjustment : -187,
                      plr_ScrollAdjustment : -187
                  });
              }
      $(".parsys.parsys-wide, #footer").css({
        "width" : "960px",
        "margin" : "0 auto"
      });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">\n  <!--\n  google_ad_client = \"ca-pub-8027655917349410\";\n  /* AdX InSkin PageSkin Passback - Good-Food */\n  google_ad_slot = \"InSkinPB-Good-Food\";\n  google_ad_width = 728;\n  google_ad_height = 90;\n  //-->\n<\\script>\n<script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
