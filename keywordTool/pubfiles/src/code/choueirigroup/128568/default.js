integration.meta = {
	'sectionID' : '128568',
	'siteName' : 'LBC - Smartphone - (MENA) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1023810',
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
		var headHeight = $(".DivHeader").height();
		if ($(".DivHeader").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".DivHeader");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
		

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cWidth = $(window).width() - integration.custom.FrameSideRight;
		stylesCSS += 'body.inskinLoaded, .inskinLoaded .mobileFixedSocial{max-width: ' + cWidth + 'px; min-width: unset;}';
		stylesCSS += '.inskinLoaded .ViewPortFullWidth{max-width: ' + cWidth + 'px; min-width: unset; position: initial !important;}';
		stylesCSS += '.inskinLoaded {}';
		
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10001"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

