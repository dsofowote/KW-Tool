integration.meta = {
	'sectionID' : '126865',
	'siteName' : 'Enfeminino - Tablet - (ES)',
	'platform' : 'tablet'
};

integration.telemetry.setup({
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'window-load': true,
	'custom': true
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707470',
	'plr_PageAlignment' : '',
	'plr_ContentW' : 1003,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("layoutChange", function(e) {
	try {
		jQuery(window).trigger("resize");
	} catch (e) {
	}
	$('head').append('<style>#af_dynamic_seealso  { display: none; }</style>');
	if ($("#sub").length >= 1) {/*Detect if sub menu exists*/
		integration.custom.InSkinTopNavSubMenu();
		integration.custom.InSkinTopNavSubMenuContent();
		$(window).resize(function() {
			integration.custom.InSkinTopNavSubMenu();
			integration.custom.InSkinTopNavSubMenuContent();
		});
	} else {
		integration.custom.InSkinTopNav();
		integration.custom.InSkinTopNavContent();
		$(window).resize(function() {
			integration.custom.InSkinTopNav();
			integration.custom.InSkinTopNavContent();
		});
	}
});

integration.on('adServed', function(e) {
	try {
		jQuery(window).trigger("resize");
	} catch (e) {
	}
	$(".ism-frame").parent().css({
		"margin" : "0 auto"
	});
	$(".ism-frame").parent().addClass('inskinanchor');
	if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
		integration.base.setCfg({
			plr_PageAlignment : 'left'
		});
		console.log('edge check');
		$(".ism-frame").parent().css({
			"margin-left" : "0px"
		});
	}
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		try {
			jQuery(window).trigger("resize");
		} catch (e) {
		}
		$("#header").css({/*Place header at top of page*/
			"position" : "absolute",
			"top" : "0",
			"width" : "100%"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left',
				plr_ContentW : 1100
			});
			$("head").append("<style>.inskinanchor{margin-left:0px !important;}</style>");
			$(".af_contentBack, footer, #content").css({/*Move content left*/
				"max-width" : "1060px",
				"margin-left" : "0px"
			});
			$("#head-nav, #sub").css({/*The width of the site + PageSkin Edge*/
				"width" : "1380px",
				"margin-left" : "-20px"
			});
		} else {
			$("footer").css({/*Place header at top of page*/
				"max-width" : "1003px",
				"margin" : "0 auto"
			});
		}
	}
	if ($("#sub").length >= 1) {/*Detect if sub menu exists*/
		integration.custom.InSkinTopNavSubMenuContent();
	} else {
		integration.custom.InSkinTopNavContent();
	}
});

integration.custom.InSkinTopNavSubMenu = function() {/* This function is to push the navigation bar below menu when the sub menu is present */
	var width = $(window).width();
	if (width >= 1008) {
		$(".ism-frame").parent().css({
			"top" : "193px" /*Height of the navigation bar with sub menu*/
		});
		integration.base.SetCfg({
			plr_PageHeightAdjustment : -140
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "50px" /*Height of fixed navigation bar*/
		});
		integration.base.SetCfg({
			plr_PageHeightAdjustment : -50
		});
	}
}

integration.custom.InSkinTopNav = function() {/* This function is to push the navigation bar below the menu */
	var width = $(window).width();
	if (width >= 1008) {
		$(".ism-frame").parent().css({
			"top" : "133px" /*Height of the navigation bar*/
		});
		$("#content").css({
			"margin-top" : "133px" /*Height of the navigation bar*/
		});
		integration.base.SetCfg({
			plr_PageHeightAdjustment : -133
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "54px" /*Height of fixed navigation bar*/
		});
		$("#content").css({
			"margin-top" : "54px" /*Height of the navigation bar*/
		});
		integration.base.SetCfg({
			plr_PageHeightAdjustment : -50
		});
	}
}

integration.custom.InSkinTopNavSubMenuContent = function() {/* This function is to push the content below the PageSkin when the sub menu is present */
	var width = $(window).width();
	if (width >= 1008) {
		$(".af_contentBack, #content").css({
			"margin-top" : "193px" /*Height of the navigation bar with sub menu*/
		});
	} else {
		$(".af_contentBack, #content").css({
			"margin-top" : "50px" /*Height of the fixed navigation bar*/
		});
	}
}

integration.custom.InSkinTopNavContent = function() {/* This function is to push the content below the PageSkin */
	var width = $(window).width();
	if (width >= 1008) {
		$(".af_contentBack, #content").css({
			"margin-top" : "152px" /*Height of the navigation bar*/
		});
	} else {
		$(".af_contentBack, #content").css({
			"margin-top" : "50px" /*Height of the fixed navigation bar*/
		});
	}
}