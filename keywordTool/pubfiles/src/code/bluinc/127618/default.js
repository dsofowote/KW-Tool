integration.meta = {
	'sectionID' : '127618',
	'siteName' : 'Jelita - Smartphone - (MY)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768225',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#shiftnav-toggle-main').height();
		setTimeout(function() {
			window.dispatchEvent(new Event('resize'));
		}, 100);
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded hb_skin.rsHor .rsArrowRight{right: 15px !important;} .inskinLoaded .section4 .hb_skin .rsArrowIcn{margin-left: 0 !important;}';
		stylesCSS += '.inskinLoaded body.archive.two-col-left #main-sidebar-container #main{width: 97% !important;}';
		stylesCSS += '.ism-close{margin-top: ' + headerHeight + 'px !important;}';
		stylesCSS += '@media only screen and (max-width: 479px){.inskinLoaded .shiftnav{width: 81% !important;}}';
		stylesCSS += '@media only screen and (max-width: 320px){.inskinLoaded .shiftnav{width: 77% !important;} .sidebar-search{padding: 20px 15px !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});
