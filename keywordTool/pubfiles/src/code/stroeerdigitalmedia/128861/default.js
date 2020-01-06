integration.meta = {
    'sectionID' : '128861',
    'siteName' : 'Leben und Erziehen - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1038071',
    'plr_PageAlignment' : 'left',
    'plr_ContentW': 1011,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
      var width = $(window).width();
      var sideWidth = width - 1011 - integration.custom.PageSkinLeftPanel + 10;
      $('#center').css({
       "float" : "none"
      });
      $('#bannerstroeertop, #wrapper').css({
       "width" : "1011px"
      });
      $('#wrapper, .container, #header, .footer').css({
        "margin" : "0 auto"
      });
      $('#nachoben').css({
       "right" : sideWidth
      });
      $("head").append('<style> body {margin-top : 0px !important;} </style>');
    }
});
