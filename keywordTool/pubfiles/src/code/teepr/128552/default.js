integration.meta = {
    'sectionID' : '128552',
    'siteName' : 'Teepr - Desktop - ( HK MY TW )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1022929',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1120)/2;
      $(".top-navigation, .secondary-navigation, footer").css({
        "width" : "1120px",
        "margin" : "0 auto"
      });
      $(".secondary-navigation").css({
        "float" : "none"
      });
      $("#astro").css({
          "left" : sideWidth
      });
      $("#move-to-top").css({
          "z-index" : "4",
          "right" : sideWidth + 10
      });
      $(".copyrights").css({
        "padding-left" : "20px"
      });

    }
});
