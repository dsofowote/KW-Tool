integration.meta = {
	'sectionID' : '128841',
	'siteName' : 'Ohmymag - Smartphone - (FR) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [350]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1037564',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				'plr_AnchorParent' : '#inskinanchor',
				'plr_PageHeightAdjustment' : -65
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #inskinanchor{top: 65px !important; position: relative;}';
		stylesCSS += '.inskinLoaded .post{position: relative !important;}';
		stylesCSS += '.inskinLoaded .button-share__button{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded .invite-brand{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto;}';
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
