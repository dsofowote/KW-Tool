integration.meta = {
   'sectionID' : '126384',
   'siteName' : 'Womens Fitness - Tablet - (AU)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {

        $('.container').css({
            "width": "960px"
        });
        $('#menu-item-703').css({
            "margin-left": "-20px"
        });



        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            /* PageSkin Edge specific changes */
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            $('#wrapper').css({
                "max-width": "960px"
            });
        };
    }
});