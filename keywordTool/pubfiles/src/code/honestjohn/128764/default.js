integration.meta = {
    'sectionID' : '128764',
    'siteName' : 'Honest John Classics - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1034779',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1005,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
      $("body").css({
          "background-image" : "none"
      });
  
      /* format the site for PageSkin Edge */
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
        $("#page_template").css({
            "margin-left" : "1px"
        });
        $("#header_bar_inner").css({
            "margin-left" : "1px"
        });
        integration.base.setCfg({
          plr_PageAlignment: "left"
        });
      }else{
          $('head').append('<style type="text/css"> #page_template {margin:0 auto !important;}</style>');
      }
    }
  });
