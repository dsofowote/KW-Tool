integration.meta = {
	'sectionID' : '128393',
	'siteName' : 'The Finder Singapore - (Unpub. until approv.) - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008642',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
	//'plr_PageHeightAdjustment' : -70
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		$(document).scroll(function() {
			var scrollPos = $(window).scrollTop();
			var headHeight = $(".navbar > .container").height();
			if (scrollPos >= 100) {
				integration.base.setCfg({
					"plr_ScrollAdjustment" : headHeight,
					"plr_PageHeightAdjustment" : -headHeight
				});
			} else {
				integration.base.setCfg({
					"plr_ScrollAdjustment" : 0
				});
			}
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

