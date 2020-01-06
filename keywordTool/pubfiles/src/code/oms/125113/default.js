integration.meta = {
	"sectionID" : "125113",
	"siteName" : "Aachener Zeitung",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707234',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#login_bar").css({
			"left" : "160px"
		});
		$("#login-bar-toggle").css({
			"margin-left" : "160px"
		});
	}
});

integration.on("layoutChange", function(e) {
	window.PageSkinLeftPanel = e.data.plr_FrameSide;
	$(".ism-frame").css({
		"z-index" : "600"
	});
	$("#login_bar").css({
		"left" : PageSkinLeftPanel
	});
	$("#login-bar-toggle").css({
		"margin-left" : PageSkinLeftPanel
	});
});
