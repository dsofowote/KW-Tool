integration.meta = {
    'sectionID' : '128539',
    'siteName' : ' Wareable - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1021235',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".header-filler, #nav-wrapper, .trending-filler, .fluid-container").css({
        "margin" : "0 auto",
        "width" : "1200px"
      });
      $("#nav-wrapper").css({
        "left" : "0px",
        "right" : "0px"
      });
    }
});
