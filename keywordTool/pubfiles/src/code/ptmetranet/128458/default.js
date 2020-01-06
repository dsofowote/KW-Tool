integration.meta = {
	'sectionID' : '128458',
	'siteName' : 'Uzone ID  - Smartphone - ( ID )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1015535',
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
		var headerHeight = $('.top-menu-container').height() + $('.top-menu-mobile').height();
		if ($(".top-ads-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".top-ads-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		/*
		$('#inskinanchor').css({
			"margin-top" : headerHeight
		});
		*/
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded{overflow: visible !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .table-imsak h4{padding: 5px 0 0 0 !important;} .inskinLoaded .table-imsak{padding: 5px 1px !important;}}';
		stylesCSS += '.inskinLoaded #table > div > table{width: 300px !important; table-layout: fixed;}';
		stylesCSS += '.inskinLoaded .header-top{margin-top: 0 !important;}';
		stylesCSS += '.inskinLoaded .fly-to-top{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});


integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
