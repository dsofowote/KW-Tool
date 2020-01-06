integration.meta = {
  'sectionID': '128525',
  'siteName': 'Now to Love - (Pagelead) - Smartphone - (AU)',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '1020900',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive': true,
  'plr_ShowCloseButton': true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
	'plr_PageHeightAdjustment': -58
};


integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded ism-anchor {top : 58px}';
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
	    $(".ism-anchor, .ism-frame:nth-of-type(1)").css({"top" : "58px"});
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
});
