integration.meta = {
	"sectionID" : "124981",
	"siteName" : "MingPao HomePage",
	"publisher" : "mingpao",
	"platform" : "desktop"
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.params = {
	'mf_siteId' : '706525',
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
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
});
