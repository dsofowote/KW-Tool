integration.meta = {
    'sectionID' : '129356',
    'siteName' : 'Reality Tea - Tablet - (INT) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1073932',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".main-header").css({
          "max-width" : "1030px",
          "margin" : "0 auto"
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".main-header, .wrapper").css({
              "margin" : "0"
            });
        }
    }
});
