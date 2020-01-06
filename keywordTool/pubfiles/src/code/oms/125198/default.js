integration.meta = {
	"sectionID" : "125198",
	"siteName" : "Saarbrucker Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706454',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1025,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#topcontainer").css({
			"height" : "0px"
		});
	}
}); 