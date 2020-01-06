integration.meta = {
    'sectionID' : '128617',
    'siteName' : 'Beautiful Nara - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1228]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026737',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 968,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : 90
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#head-menu, #site-generator, #supplementary").css({
          "max-width" : "968px",
          "margin" : "0 auto",
          "left" : "0",
          "right" : "0",
          "position" : "absolute"
      });
    }
});
