integration.meta = {
    'sectionID' : '129347',
    'siteName' : 'LiveOutdoors - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072971',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($(".container-header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".container-header");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor"
        });
      }

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".wrapper, .footer").css({"margin-left": "0px"})
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $(".container-header").outerHeight();
    $(".ism-anchor").css({"top": headHeight});
    $(".floating").css({"margin-top": headHeight});
    $(".inner-wrapper").css({"padding-top": 0});
    $(".top-search.expanded").css({"right": 0});
    integration.base.setCfg({
      plr_PageHeightAdjustment : -headHeight,
      plr_ScrollAdjustment : -headHeight
    });
});
