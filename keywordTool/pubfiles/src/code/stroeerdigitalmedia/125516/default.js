integration.meta = {
	"sectionID" : "125516",
	"siteName" : "Menshealth",
	"publisher" : "stroeer",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707691',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1100,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".mps-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".mps-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_StartScrollOnAnchor" : true
			});
		}
		$("head").append('<style>body{margin-left: 0 !important;} .mps-wrap{position: relative !important; height: 100% !important;}</style>');
		$('body').css({
			"height" : "100%",
		});
		$('html').css({
			"min-height" : "100%"
		});
		$(".mps-wrap").css({
			"width" : "1100",
			"margin" : "0 auto",
			"padding" : "0px",
		});
		$(".mps-main, .mps-footer").css({
			"top" : "5px"
		});
		$(".mps-header").css({
			"position" : "relative",
			"margin" : "0 0 5px"
		});
		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.custom.isEdge = true;
			$(".mps-wrap").css({
				"margin" : "0"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".mps-header").css({
				"margin-left" : "-20px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000000"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$("head").append('<style>#at-share-dock{margin: 0 auto !important; max-width: 1100px !important;}</style>');
	if (integration.custom.isEdge == true) {
		$("head").append('<style>#at-share-dock, body{margin-left: ' + integration.custom.FrameSide + 'px !important;}</style>');
	} else {
		$("head").append('<style>#at-share-dock{margin: 0 auto !important;}</style>');
	}
});
