integration.meta = {
	"sectionID" : "124467",
	"siteName" : "Russellgrant.com",
	"publisher" : "astrointeractive",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId': '681774',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 960,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "picad_resource_container",
	"plr_HideElementsByClass" : "wrap-components-2col",
	'plr_ForceFrameBottom' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#pagewidth").css({
				"margin-left" : "20px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			})
		}
	}
});

integration.on("adServed", function(e) {
	$('#pagewidth').css({
		'padding-top' : '10px',
		'background-color' : 'transparent'
	});
});
