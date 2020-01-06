integration.meta = {
    'sectionID' : '129367',
    'siteName' : 'D\'Marge Australia - (Creative App) - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074565',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : -63
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
  $('head').append('<style type="text/css">.ism-anchor {margin-top: 63px !important;}</style>');
	$(".ism-anchor").css({"z-index": "999"});
	$("#flyout").css({"z-index": "1000"});
  $('.search > button').on('click', function() {
    $('header').toggleClass('openedh');
    $('#search-holder').toggleClass('openeds');
  });
  $('head').append('<style type="text/css">.openedh {z-index : 1001 !important;}</style>');
  $('head').append('<style type="text/css">.openeds {z-index : 1000 !important;}</style>');
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
