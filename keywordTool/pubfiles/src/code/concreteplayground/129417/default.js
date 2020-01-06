integration.meta = {
    'sectionID' : '129417',
    'siteName' : 'Concrete Playground - (Pagelead) - Smartphone - ( AU  )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076884',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .with-horizontal-menu {margin-top: -82px}';
        stylesCSS += '.inskinLoaded .pushed {z-index: 99999999}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('layoutChange', function (e) {
	integration.custom.pl_behaviour = "class";
    integration.custom.pl_class = "#masterhead-container > .show";
    integration.custom.pl_scrollState1 = 0;
    integration.custom.pl_scrollState2 = -82;
    integration.custom.pl_closeState1 = 0;
    integration.custom.pl_closeState2 = -82;
});

integration.on('pagelead:layoutChange', function (e) {
	if (e.data.fixedTop == false) {
		integration.custom.pl_behaviour = "class";
    integration.custom.pl_class = "#masterhead-container > .show";
    integration.custom.pl_indState1 = 0;
    integration.custom.pl_indState2 = -82;
    integration.custom.pl_closeState1 = 0;
    integration.custom.pl_closeState2 = -82;
	}
});

integration.on('adServed', function(e) {
  $(".ism-anchor").css({"margin-top": "82px", "z-index": "99999999"});
  $('.burger').on('click', function() {
    $('.pushed').toggleClass('opened');
  });
  $('head').append('<style type="text/css">.opened {z-index : 100000000 !important;}</style>');
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
