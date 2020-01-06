integration.meta = {
	'sectionID' : '126117',
	'siteName' : 'SchwÃ¤bische Post Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706861',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 992,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#oms_gpt_superbanner , #oms_gpt_skyscraper").hide();
		$("#pagecontainer").css({
			"top" : "0px"
		});
		$('body, .page-banner-wrapper').css({
			"max-width" : "992px",
			"margin" : "0 auto"
		});
		$('head').append('<style type="text/css">body {margin-left: auto !important;}</style>');
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#pagecontainer").css({
				"margin-left" : "0px"
			});
			$('body, .page-banner-wrapper').css({
				"margin" : "0"
			});
			$('head').append('<style type="text/css">body {margin-left: 20px !important;}</style>');
		}
	}
});
