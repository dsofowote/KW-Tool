integration.meta = {
    'sectionID' : '129383',
    'siteName' : 'Boss Hunting - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1075299',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#lyra-wrapper, .l-sticky-navbar").css({"margin": "0 auto", "max-width": "1160px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $("#lyra-wrapper").css({"margin-left": "0"});
          $(".l-sticky-navbar").css({"margin-left": "20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
