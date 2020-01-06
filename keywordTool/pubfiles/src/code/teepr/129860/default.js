integration.meta = {
    'sectionID' : '129860',
    'siteName' : 'News18Nepal - Desktop - ( TW )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1093788',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1170)/2;
      $('.header, .footer').css({
        'width' : '1170px',
        'margin' : '0 auto'
      });
      $(".scroll-top").css({
          "right" : sideWidth
      });
    }
});
