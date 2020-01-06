integration.meta = {
    'sectionID' : '129343',
    'siteName' : 'Afterellen - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072967',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 980)/2 + 15;
      $(".header, .footer-container").css({
        "width" : "980px",
        "margin" : "0 auto"
      });
      $("head").append('<style>.scrollup{right: ' + sideWidth + 'px !important;} </style>');
    }
});
