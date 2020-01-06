integration.meta = {
	'sectionID' : '128582',
	'siteName' : 'Almowaten - Smartphone - (MENA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1024128',
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
		var windowWidth = $(window).width();
		var contentWidth = windowWidth - integration.custom.FrameSideRight;

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .topbar .social-icons a, .inskinLoaded .top-search .search-btn{width: 26px;}';
		stylesCSS += '.inskinLoaded .search-dropdown{z-index:1000;}';
		stylesCSS += '.inskinLoaded #post-header-bd{padding:0px 10px}';
		stylesCSS += '.inskinLoaded .fxx.row{max-width: ' + contentWidth + 'px !important;left:0px;right:unset;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

