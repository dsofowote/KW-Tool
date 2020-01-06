integration.meta = {
	'sectionID' : '125636',
	'siteName' : 'Mens Fitness',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681714',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_URLKeywords" : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#header-group").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-group");
			integration.base.setCfg({
				'plr_AnchorParent' : "#inskinanchor",
				'plr_PageHeightAdjustment' : -77
			});
		}
		$("#block-site-homepage-homepage-featured, #block-site-homepage-homepage-latest, #footer-wrapper").css({
			"width" : "1200px",
			"margin" : "0 auto"
		});
		$("#snap-content").css({
			"overflow" : "visible"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$(".header-wrapper, #site-menus, #pre-page, #page, #footer-wrapper").css({
				"margin-left" : "0px"
			});
			$("#page").css({
				"padding-left" : "0"
			});
			$("#header-group").css({
				"margin-left" : "-20px",
				"width" : "calc(100% + 20px)"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

integration.on("layoutChange", function(e) {
	var homepage = $("body").attr("id");
	if (homepage === "pid-1-homepage") {
		$("#inskinanchor").css({
			"margin-top" : "50px"
		});
	}
});

