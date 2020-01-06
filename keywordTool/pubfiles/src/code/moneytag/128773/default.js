integration.meta = {
    'sectionID' : '128773',
    'siteName' : ' Sciences et Avenir - Desktop - (FR) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034548',
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
      var width = $(window).width();
      var sideWidth = (width - 1000)/2;
      $("header, #footer").css({
        "max-width" : "1000px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0"
      });
      $("#footer").css({
        "display" : "block"
      });
      $(".rbrq-common").css({
        "padding-left" : "20px"
      });
      $("head").append('<style>.header-fixed header{max-width: unset !important;} </style>');
      $("head").append('<style>.article-share{margin-left: 0px !important; left: ' + sideWidth + 'px !important;} </style>');
    }
});
