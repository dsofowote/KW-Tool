integration.meta = {
    'sectionID' : '129782',
    'siteName' : 'GosuNoob - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088408',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#site-wrapper").css({"margin": "0 auto", "max-width": "1200px"});
        $(".vm-skin-left").css({"display": "none"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#site-wrapper").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
