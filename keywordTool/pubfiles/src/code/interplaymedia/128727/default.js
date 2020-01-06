integration.meta = {
	'sectionID' : '128727',
	'siteName' : 'SEN - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1032893',
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
		var windowWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".sticky-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".sticky-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -45
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded div.site-nav-bar{max-width: ' + windowWidth + 'px !important;}';
		stylesCSS += '.inskinLoaded div.site-nav-bar, .inskinLoaded .sticky.is-stuck.is-at-top{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded div.sticky-container{height: 45px !important;}';
		stylesCSS += '.inskinLoaded div.site-nav-bar, .inskinLoaded .search-panel--show{z-index: 99 !important;}';
		stylesCSS += '.inskinLoaded .article-detail--hero{width: 100% !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

