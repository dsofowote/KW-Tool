integration.meta = {
    'sectionID' : '130225',
    'siteName' : 'CBC.ca  - Desktop - ( CA )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1111626',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".feed .ad-risingstar, .feed .viewportLarge .swimlane, .basicFooter, .feed .radioTheme .globalHeader .landingNav").css({
        "max-width" : "1300px",
        "margin" : "0 auto"
      });
      $(".feed .ad-risingstar").css({
        "left" : "0",
        "right" : "0"
      });
      window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		  };

    }
});
