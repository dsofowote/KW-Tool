integration.meta = {
  'sectionID': '129336',
  'siteName': 'Stern - (Pagelead) - Smartphone - ( DE )',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1072858',
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

    //Set code to check for a CSS class
    integration.custom.pl_behaviour = "class";
    //Select class to check CSS property of
    integration.custom.pl_class = ".mod-toolbar--tab-navigation.hidden";
    integration.custom.headHeight = $("#toolbar").outerHeight() + $("#tab-navigation").outerHeight();
    //scroll states for the amount you want to push pagelead down by
    integration.custom.pl_initState = integration.custom.headHeight;
    //state 1 when class is present
    integration.custom.pl_scrollState1 = 0;
    // //state 2 when class isnt present
    integration.custom.pl_scrollState2 = integration.custom.headHeight;


    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    var headerHeight = $("#toolbar").outerHeight() + $("#tab-navigation").outerHeight();
    stylesCSS += '.inskinLoaded body{overflow-y :visible !important}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
  }

  if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
    integration.base.setCfg({
      'plr_FixedTop': true,
      'plr_EnableSwipe': true
    });
  }
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
});
