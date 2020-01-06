integration.meta = {
    'sectionID' : '129269',
    'siteName' : 'Lad Bible - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1069807',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : -96
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".contents, footer").css({"margin": "0 auto", "max-width": "1100px"});
      $(".comp_Side_links").css({"z-index": "5"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $(".contents, footer").css({"margin-left": "0"});
          $(".comp_Side_links").css({"width": "77%"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $("header").outerHeight();
  $(".ism-anchor").css({"top": headHeight});
});
