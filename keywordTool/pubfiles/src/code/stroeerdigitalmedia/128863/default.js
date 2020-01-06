integration.meta = {
    'sectionID' : '128863',
    'siteName' : ' Kidsgo - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1475]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1038073',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1155,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1155)/2 + 10;
      $(".back-to-top").css({
        "z-index" : "4",
        "right" : sideWidth
      });
    }
});
