integration.meta = {
	"sectionID" : "125345",
	"siteName" : "Desired",
	"publisher" : "interactivemedia",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1270]
};

integration.params = {
	'mf_siteId' : '706384',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 950,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#Tall").css("max-width", "950px");
		$("#Tadspacehead").css("height", "auto");
	}
});
