integration.meta = {
    'sectionID' : '129449',
    'siteName' : 'MingPao - (Creative Appr Programmatic Pagelead) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077865',
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
		$('footer').addClass('clearfix');
		$('body').addClass('clearfix');
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .clearfix {overflow: auto; float: none !important;} .inskinLoaded .clearfix::after {content: ""; clear: both; display: table;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

  if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
      integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
  }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('footer').removeClass('clearfix');
	$('body').removeClass('clearfix');
});
