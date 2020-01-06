integration.meta = {
	'sectionID' : '127258',
	'siteName' : 'Le Parisien - Smartphone - ( FR )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1005850',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded {min-width: 300px !important;}';
		stylesCSS += '.inskinLoaded .premium-banner__image img{max-width: ' + cwidth + 'px;}';
		stylesCSS += '.inskinLoaded {}';

		//stylesCSS += '.inskinLoaded #dfp_banniere-haute{display: none !important;}';

		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		var scrollAdjust = $(".header-top").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : scrollAdjust
		});
	}
});

integration.on('layoutChange', function(e) {
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
