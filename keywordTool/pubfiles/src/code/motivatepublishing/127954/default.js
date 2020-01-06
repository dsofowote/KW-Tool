integration.meta = {
	'sectionID' : '127954',
	'siteName' : 'Four Four Two Arabia - Smartphone - (MENA) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '954522',
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
		var windowSize = $(window).width();
		var titleWidth = windowSize - integration.custom.FrameSideRight * 2;
		var hHeight = $('header').height();
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #mvp-site{overflow: visible;}';
		stylesCSS += '.inskinLoaded .sect-head .title, .inskinLoaded .sect-head .title-read{width: ' + titleWidth + 'px !important;}';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + hHeight + 'px !important; position: relative;}';
		stylesCSS += '.inskinLoaded #mvp-main-wrap{margin-top: 0px !important;}';
		stylesCSS += '.inskinLoaded:after{content: ""; display: table; clear: both;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});

