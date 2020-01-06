integration.meta = {
    'sectionID' : '128514',
    'siteName' : 'givemesport.com - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId' : '1020894',
  'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#gms-site-header").css({
        "width" : "1320px",
        "margin" : "0 auto"
      });
      $(".gms-wrapper").css({
        "max-width" : "1320px"
      });

    }
});
