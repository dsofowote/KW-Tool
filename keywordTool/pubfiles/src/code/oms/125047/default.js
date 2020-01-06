integration.meta = {
	"sectionID" : "125047",
	"siteName" : "Stuttgarter Nachrichten",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707291',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1080,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".lay-wrapper").css({
			"padding-right" : "0",
			"max-width" : "1080px"
		});
		$(".Billboard_OMS").hide();
		
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
});
