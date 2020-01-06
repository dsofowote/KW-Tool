integration.meta = {
	'sectionID' : '128892',
	'siteName' : 'Money Control - Smartphone - (MENA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1040895',
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
		var headerHeight = $('.icpancakeblock').height();
		if ($(".icpancakeblock").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".icpancakeblock");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #inskinanchor, .inskinLoaded .breadcrum-bg, .inskinLoaded .main_content, .inskinLoaded #mc_content{position: relative; margin-top: ' + headerHeight + 'px !important;}';
		stylesCSS += '.inskinLoaded .icpancakeblock{top: 0px !important;}';
		stylesCSS += '.inskinLoaded #mid{padding: 0px 10px !important;}';
		stylesCSS += '.inskinLoaded .brad_crum{padding: 5px 10px !important;}';
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
	$('#inskinanchor').remove();
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
