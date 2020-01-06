integration.meta = {
    'sectionID' : '128482',
    'siteName' : 'Trainingsworld - Tablet - (DE) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1017442',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1128,
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
            $("head").append("<style>.main-wrap{margin: 0 !important;} body{margin-left: 20px !important;}</style>");
        }
        $(".main-wrap").css({
         "float" : "inherit",
         "width" : "1128px",
         "margin" : "0 auto",
         "padding-top" : "10px"
     });
     $('[i-amphtml-fixedid="F0"]').css({
         "display" : "none"
     });
    }
});
