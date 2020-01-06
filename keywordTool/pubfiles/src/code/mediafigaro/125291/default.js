integration.meta = {
	"sectionID" : "125291",
	"siteName" : "Droit et Finance",
	"publisher" : "ccmbenchmark",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707240',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("header, #section, .foot, #oasLayout, footer > .layout").css({
				"max-width" : "1020px",
				"margin-left" : "0"
			});
		} else {
			$("header, #section, .foot").css({
				"max-width" : "1020px",
				"margin" : "0 auto"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	var PageSkinGoTopMarginRight = e.data.plr_FrameSideRight;
	$(".ism-frame").parent().css({
		"z-index" : "1005"
	});
	$("#gotop, #goprev, #gonext").css({
		"margin-right" : PageSkinGoTopMarginRight
	});
});
