integration.meta = {
    'sectionID' : '129024',
    'siteName' : 'McPherson Media Group Network - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045585',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#foldaway-panel").height();
      $("#mainHeader, .site-footer, .section-background").css({"max-width": "1000px", "margin": "auto"});

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $("#mainHeader, .site-footer, .section-background, .container").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
    integration.base.setCfg({
      plr_ScrollAdjustment : headHeight
});
});
