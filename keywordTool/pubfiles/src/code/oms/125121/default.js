integration.meta = {
	"sectionID" : "125121",
	"siteName" : "Fraenkische Nachrichten",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706422',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"padding-left" : "0px"
		});
	}
});

integration.on("layoutChange", function(e) {
	var PageSkinRightPanel = e.data.plr_FrameSideRight;
	var InSkinBodyWidth = PageSkinRightPanel + 1020;
	/* 1020 is width of PageSkin */
	$("#page").css({
		"width" : InSkinBodyWidth
	});
});
