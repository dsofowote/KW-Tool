integration.meta = {
	'sectionID' : '128311',
	'siteName' : 'Jolie - Smartphone - ( AT CH DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1001838',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("#header").height();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		integration.base.setCfg({
			plr_StartScrollOnAnchor : true,
			plr_ScrollAdjustment : headerHeight
		});
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
