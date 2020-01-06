integration.meta = {
	'sectionID' : '128615',
	'siteName' : 'MingPao - (Pagelead Only) - Smartphone - ( HK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026641',
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
		$('footer').addClass('clearfix');
		$('body').addClass('clearfix');
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .clearfix {overflow: auto; float: none !important;} .inskinLoaded .clearfix::after {content: ""; clear: both; display: table;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('footer').removeClass('clearfix');
	$('body').removeClass('clearfix');
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9"
	});
});
