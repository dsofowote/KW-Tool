integration.meta = {
	'sectionID' : '128357',
	'siteName' : 'BFM TV - Smartphone - ( FR )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1005851',
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
		stylesCSS += '.inskinLoaded body:not(#site01net):not(.site01net):not(.mediaplayer) #wrap-mobile{padding-top: 0px !important;}';
		stylesCSS += '.inskinLoaded body #pane-wrapper #wrap-mobile{padding-top: 0px !important;}';// fallback of the previous styling property
		stylesCSS += '.inskinLoaded body #pane-wrapper{position: relative !important;}';
		//stylesCSS += '.inskinLoaded body .xs-modulx1-5{height: 155px !important;}';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow: visible !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .main_containt{padding: 0 !important;}}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	var headerHeight = $('.header-fix').height();
	$(".ism-frame").parent().css({
		"margin-top" : headerHeight
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});
