integration.meta = {
   'sectionID' : '126286',
   'siteName' : 'GoFeminin (DE campaigns only) - Tablet - (INT)',
   
   'platform' : 'tablet',
   'restrictions' : ''
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
	'custom': true
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707160',
		"plr_ContentType" : "PAGESKINEXPRESS",
		"plr_PageAlignment" : "center",
		"plr_UseCreativeSettings" : true,
		"plr_ContentW" : 1060,
		"plr_UseFullVersion" : true,
		"plr_PageHeightAdjustment" : -193,
		"plr_HideElementsByID" : ""
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

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("#sas_3648_wrapper").hide();
		
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
				plr_PageAlignment : 'left'
			});
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
				"max-width" : "1060px",
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
			"top" : "152px" /*Height of the navigation bar*/
		});
		integration.base.SetCfg({
			plr_PageHeightAdjustment : -100
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

integration.custom.InSkinTopNavSubMenuContent = function() {/* This function is to push the content below the PageSkin when the sub menu is present */
	var width = $(window).width();
	
	if (width >= 1008) {
		$(".af_contentBack, #content").css({
			"margin-top" : "193px" /*Height of the navigation bar with sub menu*/
		}); 
	} else {
		$(".af_contentBack, #content").css({
			"margin-top" : "193px" /*Height of the fixed navigation bar*/
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
			"margin-top" : "152px" /*Height of the fixed navigation bar*/
		});
	}
}