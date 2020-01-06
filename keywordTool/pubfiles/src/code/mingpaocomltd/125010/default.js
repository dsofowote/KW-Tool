integration.meta = {
	"sectionID" : "125010",
	"siteName" : "MingPao Channel",
	"publisher" : "mingpao",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706721',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1020,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
		});
		$(".menuitem1").css({
			"display" : "block"
		});
		$("#mainportal").css({
			"float" : "none"
		});
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#mainportal").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#mainportal");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("#maincontent_container").css({
				"margin-left" : "0px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
});
