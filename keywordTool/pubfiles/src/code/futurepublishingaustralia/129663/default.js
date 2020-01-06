integration.meta = {
    'sectionID' : '129663',
    'siteName' : 'Techradar - (Pagelead) - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086271',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
  	'plr_FixedTop' : true,
  	'plr_EnableSwipe' : false,
  	'plr_HideFixedTopAfter' : 5000
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .burgerbar, .inskinLoaded .wrapper{position: relative;}';
		stylesCSS += '.inskinLoaded .primary-nav .menuitems{top: 0 !important;}';
		stylesCSS += '.inskinLoaded .search-box{z-index: 9999 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});


integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
