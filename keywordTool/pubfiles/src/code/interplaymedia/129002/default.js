integration.meta = {
	'sectionID' : '129002',
	'siteName' : 'Melbourne United - Smartphone - AU',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1045577',
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
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #club-news #page-news, .inskinLoaded #club-news-article #page-news, .inskinLoaded, .inskinLoaded body {overflow: visible !important;}';
		stylesCSS += '.inskinLoaded #club-news, .inskinLoaded #club-news-article{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .navbar-collapse{height: 100% !important;}';
		stylesCSS += '.inskinLoaded #club-news #page-news, .inskinLoaded #club-news-article #page-news{height: 100% !important;}';
		stylesCSS += '.inskinLoaded div.club-main-navigation .club-navigation{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
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
	$('html').removeClass('inskinLoaded');
});

