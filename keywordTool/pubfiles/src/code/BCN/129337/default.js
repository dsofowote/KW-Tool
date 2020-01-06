integration.meta = {
  'sectionID': '129337',
  'siteName': 'Bunte - (Pagelead) - Smartphone - (DE)',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1072859',
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
    if ($("#header").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("#header");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor"
      });
    }
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    var headHeighht = $('#header').height();
    stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1) {top: unset !important}';
    stylesCSS += '.inskinLoaded .ism-close, .ism-indicator {top:  '+ headHeighht +'px !important}';
    stylesCSS += '.inskinLoaded .ism-open {top: 250px !important}';
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
  var headHeighht = $('#header').height();
      $(".ism-anchor").css({"z-index" : "999"});
      $('.fe-header button').on('click', function() {
          $('#header').toggleClass('opened');
      });
      $('head').append('<style type="text/css">.opened {z-index : 1000 !important;}</style>');
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
});
