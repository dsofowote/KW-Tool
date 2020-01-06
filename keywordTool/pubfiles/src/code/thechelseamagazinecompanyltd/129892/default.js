integration.meta = {
    'sectionID' : '129892',
    'siteName' : 'Classic Boat - Tablet - (UK) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094975',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1164,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#td-outer-wrap").css({"margin-left": "0"});
            $(".td-menu-background").css({"z-index": "1"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
