integration.meta = {
  'sectionID': '129148',
  'siteName': 'Big Footy - (Pagelead) - Smartphone - (AU)',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '1059649',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive': true,
  'plr_ShowCloseButton': true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_PageHeightAdjustment': -54
};


integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    if ($(".tdc-header-wrap").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter(".tdc-header-wrap");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor"
      });
    } else if ($(".p-navSticky").length == 1) {
      $("<div id='inskinanchor'></div>").insertBefore(".p-body");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor"
      });
    }
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .td-banner-wrap-full {display: none}';
    stylesCSS += '.inskinLoaded .ism-anchor {z-index: 9999}';
    stylesCSS += '.inskinLoaded #td-outer-wrap {overflow: visible}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
  }
  if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
    integration.base.setCfg({
      'plr_FixedTop': true,
      'plr_EnableSwipe': true
    });
  }
});

integration.on("adServed", function(e) {
  $('.p-navgroup-link--search, .p-nav-menuTrigger, .offCanvasMenu-closer, .offCanvasMenu-backdrop').on('click', function() {
    $('.menu, .offCanvasMenu').toggleClass('opened');
  });
  $('head').append('<style type="text/css">.opened {z-index : 100000 !important;}</style>');
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
  $("#inskinanchor").remove();
});
