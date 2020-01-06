integration.meta = {
	'sectionID' : '127977',
	'siteName' : 'Glam - (Creative Approval) - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '961597',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : false,
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {padding: 0 75px 0 0;} .inskinLoaded #slide-menu{position: fixed !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		setTimeout(function() {
			window.dispatchEvent(new Event('resize'));
		}, 100);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #slide-menu{max-width: calc(100% + ' + integration.custom.FrameSideRight + 'px); top: 0 !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

