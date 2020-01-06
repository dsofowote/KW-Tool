integration.meta = {
	'sectionID' : '128326',
	'siteName' : 'Archant Regionals - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1003508',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.custom.pageLead = true;
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);

	if (integration.custom.pageLead) {
		$(".ism-anchor").css({
			"z-index" : "10000"
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

