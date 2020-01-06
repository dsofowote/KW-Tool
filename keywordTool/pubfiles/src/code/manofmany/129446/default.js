integration.meta = {
    'sectionID' : '129446',
    'siteName' : 'Man of Many - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077862',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1220,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($("#masterhead").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#masterhead");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor",
          plr_PageHeightAdjustment: -63
        });
      }
      $("#viewport").css({"float": "none"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#main").css({"max-width":"1200px"});
            $("#masterfoot").css({"max-width":"1200px"});
            $("#masterhead").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
