integration.meta = {
    'sectionID' : '128797',
    'siteName' : ' Bub Hub - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1035562',
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
      $("#header").css({"max-width":"1000px", "margin":"auto"});
      $("#nav").css({"max-width":"1000px", "margin":"auto"});
      $("#footer").css({"max-width":"1000px", "margin":"auto"});
      $(".ad_is_1538468610701_CONTAINER").css({"z-index":"0"});
    }
});
