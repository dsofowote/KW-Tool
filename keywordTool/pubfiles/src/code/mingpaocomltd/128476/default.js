integration.meta = {
	'sectionID' : '128476',
	'siteName' : 'MP Deluxe - Smartphone - (HK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1016662',
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
		integration.custom.FrameTop = e.data.plr_FrameTop;
		integration.custom.ww = $(window).width();
		integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
		integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded.shiftnav-open.shiftnav-open-left .shiftnav-wrap{transform: translateX(230px) !important;}';
		stylesCSS += '.inskinLoaded .form-element-wrapper.navbar-fixed-top{width: ' + integration.custom.cw + 'px!important;}';
		stylesCSS += '.inskinLoaded.shiftnav-open.shiftnav-open-left .form-element-wrapper.navbar-fixed-top, .inskinLoaded.shiftnav-transitioning .form-element-wrapper.navbar-fixed-top{margin-top: 0px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	var stylesCSS = '<style type="text/css" id="inskinStyles">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS)
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel || height === 0) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		var newvalue = '.inskinLoaded .form-element-wrapper.navbar-fixed-top{margin-top: ' + newheight + 'px !important;}';
		document.getElementById('inskinStyles').innerHTML = newvalue;
	} else {
		var newvalue = '.inskinLoaded .form-element-wrapper.navbar-fixed-top{margin-top: 0 !important;}';
		document.getElementById('inskinStyles').innerHTML = newvalue;
	}
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
