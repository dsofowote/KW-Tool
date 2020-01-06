integration.meta = {
	'sectionID' : '127980',
	'siteName' : 'NUYOU MY - (Creative Approval) - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965019',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ShowCloseButton' : true,
	'plr_FixedCloseButton': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var headerHeight = $('#shiftnav-toggle-main').height();
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.ism-close{top: ' + headerHeight + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var headerHeight = $('#shiftnav-toggle-main').height();
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '@media only screen and (max-width: 479px){.inskinLoaded .shiftnav{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}}';
	stylesCSS += '@media only screen and (max-width: 479px){.shiftnav-open.shiftnav-open-left #shiftnav-toggle-main{-webkit-transform: translateX(80.8%);-ms-transform: translateX(80.8%);transform: translateX(80.8%);}}';
	stylesCSS += '.inskinLoaded{padding: ' + headerHeight + 'px 0 ' + integration.custom.FrameSideRight + 'px 0 !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});
