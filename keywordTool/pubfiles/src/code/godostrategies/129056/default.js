integration.meta = {
    'sectionID' : '129056',
    'siteName' : 'La Vanguardia - Tablet - (ES)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046808',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1008,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
             $("head").append("<style>body{overflow: visible !important;} .container-header, .main, .header, footer{width: 1008px !important; margin: 0;}</style>");
        }
       
    }
});