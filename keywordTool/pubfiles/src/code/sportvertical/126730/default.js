integration.meta = {
	'sectionID' : '126730',
	'siteName' : 'Fussballeuropa - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708054',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .navbar{z-index: 999;} .inskinLoaded #sb-site{z-index: 9999;}';
		stylesCSS += '.inskinLoaded .content{overflow-x: hidden;}';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow-x: visible;}';
		stylesCSS += '.inskinLoaded .text_content{width: calc(100% - 40px);}';// -40px because website is using 20px margin per side
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .contentbbar{width: calc(100% - ' + integration.custom.FrameSideRight + 'px);} .inskinLoaded .scrollToTop{z-index: 9999; margin-left: calc(100% - 128px);}';
	stylesCSS += '.inskinLoaded.sb-active .contentbbar{width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adServed', function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "99999"
	});
});
integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});


