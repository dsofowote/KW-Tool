integration.meta = {
    'sectionID' : '130206',
    'siteName' : 'El Pais - Tablet - (ES)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1106988',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 996,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('header').css({'max-width':'996px','margin':'0 auto'});
        $('#cabecera').css({'left':'0','right':'0'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.contenedor').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});

        }
    }
});

integration.on("adServed", function(e) {

    $(".ism-anchor").css({"z-index" : "10000001"});

});
