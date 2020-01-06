integration.meta = {
  'sectionID': '128968',
  'siteName': 'Harper\'s Bazaar - (Unpub till Appr - Pagelead) - Smartphone - ( SG )',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1044171',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive': true,
  'plr_ShowCloseButton': true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    var hHeight = $(".masthead").outerHeight();
    console.log(hHeight);
    if ($(".mobile-overlay-nav").length == 1) {
      $("<div id='inskinanchor'></div>").insertBefore(".mobile-overlay-nav");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        'plr_PageHeightAdjustment' : -hHeight
      });
    }
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded {}';
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

integration.on('layoutChange', function(e) {
  var plFixed = true;
  var headHeight = $(".mobile-overlay-nav").height();
  var newValue = "";
  var scrollTop = $(document).scrollTop();
  var stylesCSS = '<style id="inskinPL" type="text/css">';
  if (scrollTop >= a && plFixed) {
    newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
    $("#inskinPL").html(newValue);
  } else {
    newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
    $("#inskinPL").html(newValue);
  }
  stylesCSS += '</style>';
  $('head').append(stylesCSS);
  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
  var a = headHeight + integration.custom.FrameSideRight;
  $(document).on('scroll', function() {
    scrollTop = $(document).scrollTop();
    if (scrollTop >= a && plFixed) {
      newValue = '.inskinLoaded .ism-frame:nth-of-type(1){top:' + headHeight + 'px !important;}';
      $("#inskinPL").html(newValue);
    } else {
      newValue = '.inskinLoaded .ism-frame:nth-of-type(1){top:0px !important;}';
      $("#inskinPL").html(newValue);
    }
  });
  setTimeout(function() {
    plFixed = false;
    newValue = '.inskinLoaded .ism-frame:nth-of-type(1){top:0px !important;}';
    $("#inskinPL").html(newValue);
  }, 6500);
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
  $('#inskinanchor').remove();
});
