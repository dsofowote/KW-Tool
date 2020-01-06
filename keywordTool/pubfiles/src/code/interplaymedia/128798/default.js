integration.meta = {
    'sectionID' : '128798',
    'siteName' : 'Bub Hub - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1035563',
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
      $("#header").css({"max-width":"1000px", "margin":"auto"});
      $("#nav").css({"max-width":"1000px", "margin":"auto"});
      $("#footer").css({"max-width":"1000px", "margin":"auto"});
      $(".ad_is_1538468610701_CONTAINER").css({"z-index":"0"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
      $("head").append("<style>body {margin-left:20px!important;}</style>");
      $("#header").css({"margin-left":"0"});
      $("#nav").css({"margin-left":"0"});
      $("#footer").css({"margin-left":"0"});
      $("#main").css({"margin-left":"0"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
