integration.meta = {
	'sectionID' : '128775',
	'siteName' : 'Sciences et Avenir - Smartphone - (FR) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1034550',
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
		if ($("#pub_habillage").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#pub_habillage");
			integration.base.setCfg({
				'plr_AnchorParent' : '#inskinanchor'
			});
		}
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .qc-cmp-persistent-link{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; left: 0;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});
