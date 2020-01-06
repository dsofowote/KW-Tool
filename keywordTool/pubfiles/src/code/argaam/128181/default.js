integration.meta = {
	'sectionID' : '128181',
	'siteName' : 'Akhbaar24.argaam.com - Smartphone - ( MENA )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '987234',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -55,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #divBodyContianer {padding-top:0px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	var headerHeight = $('#titleBar').height();
	$(".ism-frame").parent().css({
		'margin-top' : headerHeight + 10,
		'z-index' : '150'
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .sticky-share-wrapper.show{width: calc(100% - " + integration.custom.PageSkinRightPanel + "px);}</style>");
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

