integration.meta = {
	"sectionID" : "125292",
	"siteName" : "Architectural Digest",
	"publisher" : "condenast",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1270]
};

integration.params = {
	'mf_siteId' : '706314',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#site-header").css({
			"margin-top" : "30px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
