integration.meta = {
	"sectionID" : "125222",
	"siteName" : "Focus",
	"publisher" : "tomorrow",
	"platform" : "tablet"
};

integration.telemetry.setup({
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706292',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_FastInit" : true,
	"plr_UseCreativeSettings" : true,
	'plr_ContentW' : 1040,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	'plr_PageHeightAdjustment' : -113,
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 55,
	"plr_FastInit" : true,
	'plr_ConsentString': "BOXVWosOXVWosAKABBENBxoAAAAiCAMgAUABYAFQALgAZABAADIAIgAR4AnACeAJYAhABgQ",
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page-container").css({
				"margin-left" : "0px"
			});
		}
		$("#page-container, #breakingNewsContainer, #footerv2-frame, #footerv2-head").css({
			"margin-left" : "0px",
			"max-width" : "1040px"
		});
		$("#main").css({
			"margin" : "0 auto"
		});
		$("head").append('<style>.ressort-wrapper{width: 100% !important;}</style>');
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$('.fol-service-center-menu').css({
		'left' : integration.custom.FrameSide
	});
	$("header").css({
		"margin-left" : -integration.custom.FrameSide + "px",
		"margin-bottom" : "0"
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1001"
	});
});
