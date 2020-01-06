integration.meta = {
	'sectionID' : '125909',
	'siteName' : 'Stuff.tv - Smartphone - (SG) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1002323',
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
		var headerHeight = $(".grid_16.top-header-grid.clearfix").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : headerHeight
		});
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adCallResult', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 300);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 300);
});
