integration.meta = {
    'sectionID' : '129438',
    'siteName' : 'Sportskeeda - Desktop - ( IN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077594',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".keeda-side-menu").removeClass("open");
      $(".homepage-logo").css({"margin-left": "0px"});
      $(".bc-holder").css({"margin": "0 auto", "max-width": "1100px"});
    }
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({"top": "50px"});
});
