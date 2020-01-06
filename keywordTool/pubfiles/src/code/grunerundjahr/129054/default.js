integration.meta = {
	'sectionID' : '129054',
	'siteName' : 'Stern - Smartphone - ( AT CH DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1046806',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_FixedCloseButton': true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_CheckOptOut' : true,
	'plr_FastInit' : true,
	'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var top = $("#toolbar").height() + $("#tab-navigation").height();
		$("head").append("<style>#ad-placeholder-page-top{display: none !important;}</style>");
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded #wrapper{padding-top: 0 !important;}';
		stylesCSS += '.inskinLoaded .ism-close {top: ' + top + 'px !important;}';
		stylesCSS += '.inskinLoaded .mod-toolbar, .inskinLoaded .body--top-panel-visible #top-panel{z-index: 99 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});


integration.on("adServed", function(e) {
	var navHeight = $('#tab-navigation').outerHeight();
	var headerHeight = $('#toolbar').outerHeight();
	var totalHeight = navHeight + headerHeight;
	$(".ism-frame").parent().css({
		"margin-top" : totalHeight
	});
	integration.base.setCfg({
		'plr_PageHeightAdjustment' : -totalHeight
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});
