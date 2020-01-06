integration.meta = {
    'sectionID' : '128950',
    'siteName' : 'Business Punk  - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043088',
    'plr_PageAlignment' : 'custom',
    'plr_FramePositionCSS' : 'left: -90px; margin: 0 auto;',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1020)/2 + 90;
      $("head").append('<style>#cookie-notice{right: ' + sideWidth + 'px !important;} </style>');
      $('#footer-container, .newsletter-form-big').css({
       "width" : "1020px",
       "margin" : "0 auto",
       "left" : "-90px"
      });
    }
});
