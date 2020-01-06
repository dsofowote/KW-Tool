integration.meta = {
  'sectionID': '128265',
  'siteName': 'Timeout Asia - Smartphone - ( HK SG )',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '994986',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive': true,
  'plr_ShowCloseButton': true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  //'plr_ScrollAdjustment': 60
};


integration.on('adCallResult', function(e) {
  if ($("#header").length == 1) {
    $("<div id='inskinanchor'></div>").insertAfter("#header");
    integration.base.setCfg({
      plr_AnchorParent: "#inskinanchor",
      plr_PageHeightAdjustment: -60,
    });
  }
  $('body').addClass('inskinLoaded');
  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
  var stylesCSS = '<style type="text/css">';
  stylesCSS += '.inskinLoaded #header{width:calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
  stylesCSS += '.inskinLoaded .ism-close{position:fixed !important; margin-top:60px !important;right:0px !important;}';
  //stylesCSS += '.inskinLoaded .js-sticky-footer-wrapper, .inskinLoaded .js-header-ad-wrapper{display:none;}';
  stylesCSS += '.inskinLoaded .feature-page .main_content .ad-mpu{margin-left:-10px;}';
  stylesCSS += '.inskinLoaded .ad{margin-left:-10px;}';
  stylesCSS += '.inskinLoaded {}';
  stylesCSS += '</style>'
  $('head').append(stylesCSS);
});


integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
  $("#inskinanchor").remove();
});
