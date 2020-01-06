integration.meta = {
	'sectionID' : '128912',
	'siteName' : 'SirapLimau - (Creative Approval) -  - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1041633',
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
		if ($("#head-main-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#head-main-wrap");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -64,
			});
		}

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #site, .inskinLoaded #site-wrap{overflow: visible !important; float: none !important;} .inskinLoaded #site:after {content: ""; clear: both; display: table;}';
		stylesCSS += '.inskinLoaded #body-main-wrap{margin-top: 10px !important; z-index: 0}';
		stylesCSS += '.inskinLoaded #main-nav-wrap{position: fixed !important; left: 0; right: 0; top: 0 !important;}';
		stylesCSS += '.inskinLoaded .at-share-dock.atss{z-index: 1} .inskinLoaded #fly-wrap{z-index: 9999999 !important;}';
		stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 2 !important;}';
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

integration.on("adServed", function(e) {
	$("#inskinanchor").css({"margin-top": "64px"});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});
