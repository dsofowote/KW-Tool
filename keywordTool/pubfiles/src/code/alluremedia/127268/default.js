integration.meta = {
  'sectionID': '127268',
  'siteName': 'Gizmodo- Smartphone - (AU) ',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '707416',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive' : true,
  'plr_ShowCloseButton' : true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('layoutChange', function(e) {
  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

  var headerHeight = $('.site-header--fixed').height();
  if ($("header .site-header--fixed").length == 0) {
    $('.site-header').css({
      "top": "0"
    });
    $('head').append('<style type="text/css">.site-header {z-index : 999 !important;}</style>');
    $('.ism-anchor').css({
      "top": "62px"
    });
    integration.base.setCfg({
      plr_GetContentHeightVersion: 2
    });
  }
  $('.meta__social').css({
    "max-width": "calc(100% - " + integration.custom.FrameSideRight + "px)"
  });
  $('.posts__post-wrapper').css({
    "max-width": "100%"
  });
  $('.top-stories-container').css({
    "padding-top": "0"
  });

  $('.site-header--fixed').css({
    "width": "100%"
  });
});

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    var headerHeight = $('.site-header--fixed').height();
    if ($("header .site-header--fixed").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("header .site-header--fixed");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: 20
      });
    }
    $('header .site-header--fixed').css({
      "top": "0"
    });
    //$('.mobile-leaderboard, .ad-loop-leaderboard__container').hide();
    $('#inskinanchor').css({
      "margin-top": headerHeight
    });
    $('.top-stories-container').css({
      "margin-top": "10px"
    });
    $('head').append('<style type="text/css">.page-wrapper .page {display: block !important;}</style>');
  }
});

integration.on("adServed", function(e) {
  $(".ism-frame").parent().css({
    "z-index": "200"
  });
});
