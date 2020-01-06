integration.meta = {
	"sectionID" : "124982",
	"siteName" : "MingPao HomePage",
	"publisher" : "mingpao",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706593',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1020,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#outer_wrapper").css({
				"margin-left" : "0px",
				"padding-left" : "12px"
			});
			$('#footer').css({
				'margin-left' : '0px',
				'left' : '10px'
			});

			$("#bkg_wrapper").css({
				"margin-left" : "-5px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
});
