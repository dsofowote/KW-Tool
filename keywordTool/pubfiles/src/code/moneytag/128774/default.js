integration.meta = {
    'sectionID' : '128774',
    'siteName' : 'Sciences et Avenir - Tablet - (FR) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034549',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $('.header-sticky').outerHeight();
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
      integration.base.setCfg({
        'plr_ScrollAdjustment' : headerHeight
      });
      $("header, .container, #footer, .pub-container-haut, .pub-container-bas").css({
        "max-width" : "1000px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0"
      });
      $("header .main-nav .dropdown .dropdown-menu, .header_main .main-nav .dropdown .dropdown-menu").css({
        "padding-left" : "20px"
      });
      $("#footer").css({
        "display" : "block"
      });
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
          $("head").append('<style>header, .container, #footer, .pub-container-haut, .pub-container-bas{margin-left: 10px!important;} </style>');
          $("head").append('<style>#footer .container-in, .header-fixed header, .header-sticky{margin-left: 0px!important;} </style>');
          $("head").append('<style>.article-share{margin-left: 0px!important;} </style>');
      }
      $("head").append('<style>.article-share{z-index: 2!important;} </style>');
      $("head").append('<style>.header-fixed header, .header-sticky{max-width: unset !important;} </style>');
    }
});
