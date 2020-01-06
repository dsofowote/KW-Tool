integration.meta = {
	'sectionID' : '127998',
	'siteName' : 'Sportbild - (DE campaigns only ) - Smartphone - ( DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965316',
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
		if ($("body .masthead").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body .masthead");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -63,
				plr_ScrollAdjustment : -3
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .mainnav:not(:target){z-index: 10 !important;} .inskinLoaded #outerWrapper{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded main{padding-bottom: 0 !important;}';
		stylesCSS += '.inskinLoaded .masthead{margin-bottom: 3px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var headerHeight = $('.masthead').height();
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .masthead{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += 'body.js-nav #inskinanchor{margin-top: ' + headerHeight + 'px !important;}';
	stylesCSS += '.inskinLoaded .socialbar--fixed{max-width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
