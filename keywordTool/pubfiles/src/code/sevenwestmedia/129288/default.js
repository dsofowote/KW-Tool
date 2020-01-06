integration.meta = {
    'sectionID' : '129288',
    'siteName' : '7 News - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070867',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    // 'plr_FluidAnchor': true,
    // 'plr_Fluid': true,
    // 'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            // $("#root").css({"max-width": "1000px"})
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
        window.unloadPageskin = function () {
          try {
            integration.destroy();
          } catch (e) {}
        };


    }
});
