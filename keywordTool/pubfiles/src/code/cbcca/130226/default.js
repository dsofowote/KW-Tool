integration.meta = {
    'sectionID' : '130226',
    'siteName' : 'CBC.ca  - Tablet - ( CA )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1111617',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1284,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".feed .ad-risingstar, .feed .viewportLarge .swimlane, .basicFooter, .feed .radioTheme .globalHeader .landingNav").css({
              "margin-left" : "0"
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
