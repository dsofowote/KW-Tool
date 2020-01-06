integration.meta = {
    'sectionID' : '128825',
    'siteName' : 'King of Capture - Desktop - (HK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1482]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1036001',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1222,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var sideWidth = ($(window).width() - 1222)/2 + 20;
      $("head").append("<style>.site__footer {max-width: 1222px!important;}</style>");
      $("head").append("<style>.share_bar {left:"+ sideWidth +"px!important;}</style>");
    }
});
