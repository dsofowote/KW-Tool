integration.meta = {
  'sectionID': '127620',
  'siteName': 'EH - Smartphone - (MY)',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '768227',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive': true,
  'plr_ShowCloseButton': true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  "plr_FixedCloseButton": true
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #featured-post-2 .post{margin-right: 4px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
      }
    });
integration.on("layoutChange", function(e) {
  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
  wWidth = $(window).width();
  var stylesCSS = '<style type="text/css">';
  stylesCSS += '.inskinLoaded .soliloquy-container .soliloquy-item{width: calc(' + wWidth + 'px - ' + integration.custom.FrameSideRight + 'px - 20px) !important;}';
  stylesCSS += '.inskinLoaded .search-form input[type="search"], #subbox, .widget_product_search input#s{width: calc(' + wWidth + 'px - ' + integration.custom.FrameSideRight + 'px - 40px);padding:0px;}';
  stylesCSS += '</style>'
  $('head').append(stylesCSS);
});
integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
});
