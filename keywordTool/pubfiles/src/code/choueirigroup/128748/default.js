integration.meta = {
	'sectionID' : '128748',
	'siteName' : ' Laha Mag - Desktop - (MENA)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1033770',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1255,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("header .ticker .to_top").css({
			"right" : sideWidth - 20
		});
		$('.container, header').css({
			"width" : "1245px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append("<style>header .menuWrapper .menuContainer .menu{width: 1175px !important;} header .menuWrapper .menuContainer .search_loop{margin: 4px !important;}</style>");
	}
});
