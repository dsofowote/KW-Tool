integration.meta = {
    'sectionID' : '129961',
    'siteName' : 'Starts at 60 - (Publisher booking) - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#starlord_navbar, #starlord_collection, #starlord_footer, #starlord_article").css({
        "width" : "1180px",
        "margin" : "0 auto"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("#starlord_navbar, #starlord_collection, #starlord_footer, #starlord_article").css({
              "margin" : "0"
            });
        }
        window.unloadPageskin = function() {
          try {
            integration.destroy();
          } catch (e) {
          }
        };
    }
});
