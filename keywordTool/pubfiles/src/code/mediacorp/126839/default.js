integration.meta = {
	'sectionID' : '126839',
	'siteName' : 'Channel NewsAsia - Smartphone - (SG TH)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707648',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	//'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedTop' : true,
	'plr_EnableSwipe' : false,
	'plr_HideFixedTopAfter' : 5000
};

//************************* PAGELEAD *************************//

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('header').height();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded body{margin: 0 !important; padding: 0 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_ScrollAdjustment' : headerHeight
			});
		}
	}
});

integration.on("adServed", function(e) {
	$("#inskinanchor").css({
		"z-index" : "5"
	});
});

//************************* PAGELEAD *************************//
