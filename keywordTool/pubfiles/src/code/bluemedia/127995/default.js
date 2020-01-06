integration.meta = {
	'sectionID' : '127995',
	'siteName' : 'Gonzoo - Tablet - (ES)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965313',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style>.header-wrapper .header-scroll-wrapper{max-width: 1030px!important; margin: 0 auto!important; left: 0; right: 0;}</style>');
		$(".header-wrapper #ui-user-div").css({
			"position" : "relative",
			"top" : "-40px"
		});
		$(".header-wrapper #ui-user-div .user>a .icon").css({
			"position" : "relative",
			"display" : "inline-block",
			"top" : "-17px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append('<style>.wrapper{margin: 0 !important;}</style>');
			$("head").append('<style>.header-wrapper .header-scroll-wrapper{margin-left: 20px!important;}</style>');
			$("head").append('<style>#ui-header-land{margin-left: 0px!important;}</style>');
			$("#ui-20m-header, #SUP1, #breaking-news, .subheader, #main").css({
				"margin-left" : "0px"
			});
			$(".header-wrapper #ui-user-div").css({
				"left" : "calc(50% + 285px)"
			});
		}
	}
});
