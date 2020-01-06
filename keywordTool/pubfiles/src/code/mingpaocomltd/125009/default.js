integration.meta = {
	"sectionID" : "125009",
	"siteName" : "MingPao Channel",
	"publisher" : "mingpao",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1280]
};

integration.params = {
	'mf_siteId' : '707347',
"plr_UseCreativeSettings" : true,
"plr_UseFullVersion" : true,
"plr_ContentType" : "PAGESKINEXPRESS",
"plr_ContentW" : 1020,
"plr_PageAlignment" : "center",
"plr_HideElementsByID" : "",
"plr_HideElementsByClass" : "superbanner, lrectbanner, ad300"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
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
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
});
