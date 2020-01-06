integration.meta = {
	'sectionID' : '126777',
	'siteName' : 'Erdbeerlounge - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707689',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 995,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navHeight = $(".header-stay").outerHeight();
		var navHeight2 = $("header").outerHeight();
		console.log(navHeight);
		console.log(navHeight2);
		$("#div-gpt-ad-sky, .ebl-row-0 .ebl-ad-superbanner1").css({
			"display" : "none"
		});
		$("#pl-1 > div.row.ebl-row-0 > div > div > .so-panel").css({
			"height" : "0"
		});

		$("footer, .footer-archive").css({
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		$(".title-hd span").css({
			"z-index" : "1"
		});
		$(".sad_banner").css({
			"display" : "none"
		});
		$(".overflow-content").css({
			"overflow" : "visible"
		});
		$("header").css({
			"overflow" : "hidden"
		});
		$("#navMain > div > div.container.cMenu > div.hidden-nojs.search > div > form > input.sb-search-input").css({
			"left" : "auto"
		});

		if ($(".header-stay > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-stay");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight,
			});
		} else 		if ($("header").length == 1) {
					$("<div id='inskinanchor'></div>").insertAfter("header");
					integration.base.setCfg({
						plr_AnchorParent : "#inskinanchor",
						plr_PageHeightAdjustment : -navHeight2,
					});
				}
		$('head').append('<style type="text/css">.container-wrapper {margin-top: 25px !important;}</style>');
	}
});
