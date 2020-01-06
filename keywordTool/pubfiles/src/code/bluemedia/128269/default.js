integration.meta = {
	'sectionID' : '128269',
	'siteName' : '20 Minutos Listas - Smartphone - ( ES )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '996182',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded body {overflow: visible !important;}';
		stylesCSS += '.inskinLoaded body #content{min-width: 100% !important;}';
		stylesCSS += '.inskinLoaded body #left{position: fixed !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"margin-top" : "13px"
	});
	integration.base.setCfg({
		plr_ScrollAdjustment : -13,
		plr_PageHeightAdjustment : -13
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

