integration.meta = {
    'sectionID' : '128726',
    'siteName' : 'SEN - Tablet - (AU)  ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1032891',
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
        var headHeight = $(".site-nav-bar").outerHeight();
        if ($(".site-header").length == 1) {
                    $("<div id='inskinanchor'></div>").insertAfter(".site-header");
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",
                        plr_PageHeightAdjustment : -headHeight + -15
                    });
		}
        
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
