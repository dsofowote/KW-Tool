integration.meta = {
    'sectionID' : '129023',
    'siteName' : 'McPherson Media Group Network - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045584',
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
    }
    integration.base.setCfg({
  plr_ScrollAdjustment : headHeight
});
});
