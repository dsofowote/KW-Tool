integration.meta = {
	'sectionID' : '127982',
	'siteName' : 'Female MY - (Unpublished until approval) - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '977917',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true,
	'plr_PageHeightAdjustment' : -40
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.top-menu-area').height();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .ism-close{margin-top: ' + headerHeight + 'px !important;}';
		stylesCSS += '.inskinLoaded #content{padding-top: 0 !important;}';
		stylesCSS += '.inskinLoaded #header-container{margin-bottom: 0 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var headerHeight = $('.top-menu-area').height();
	$('.ism-frame').parent().css({
		"margin-top" : headerHeight
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .shiftnav{width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

