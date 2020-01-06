integration.meta = {
	"sectionID" : "125285",
	"siteName" : "Giga",
	"publisher" : "stroeer",
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
	'mf_siteId' : '707496',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_PageHeightAdjustment" : -90,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#outertop").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#outertop");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("#outertop3").hide();
		$('.innertop, #outer').css({
			'width' : '1000px'
		});
		$("#outermid, #outerbottom").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$('.innertop, #outer').css({
				'margin-left' : '0px'
			});
			$("#outermid, #outerbottom, .outer").css({
				"width" : "1000px",
				"margin-left" : "0"
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
