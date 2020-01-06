integration.meta = {
	'sectionID' : '128397',
	'siteName' : 'Prosieben - Smartphone - ( DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008801',
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
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
		var headerHeight = $(".page-header").height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".page-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".page-header");
			integration.base.setCfg({
				'plr_AnchorParent' : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .topbar-container-static .topbar-container{width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
		stylesCSS += '.inskinLoaded .topbar-container-static .topbar-container.sticky{width: 100% !important;}';
		stylesCSS += '.inskinLoaded .main{overflow: visible !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

