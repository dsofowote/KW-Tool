integration.meta = {
	'sectionID' : '128607',
	'siteName' : 'InSing - (Pagelead) - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026052',
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
		stylesCSS += '.inskinLoaded #page-header{min-height: 54px !important;}';
		stylesCSS += '.inskinLoaded.respon-sticky{padding-top: 56px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on("layoutChange", function(e) {
	$(window).scroll(function() {
		if ($(".ism-frame:first").css("position") === "fixed") {
			$(".ism-frame").parent().css({
				"z-index" : "3"
			});
		} else {
			$(".ism-frame").parent().css({
				"z-index" : "auto"
			});
		}
	})
});
