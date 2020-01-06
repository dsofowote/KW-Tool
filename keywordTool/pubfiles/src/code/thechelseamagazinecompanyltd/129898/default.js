integration.meta = {
    'sectionID' : '129898',
    'siteName' : 'Little London - Tablet - ( UK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094997',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#outer-wrap").css({"margin-left": "0px"});
            $(".td-menu-wrap").css({"margin-left": "20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
