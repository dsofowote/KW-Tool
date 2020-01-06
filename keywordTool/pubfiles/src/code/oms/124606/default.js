integration.meta = {
	"sectionID" : "124606",
	"siteName" : "Donau Kurier",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707506',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 960,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	//"plr_FramePositionCSS": "margin:0 auto;border-right:100px solid transparent;"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#superbanner").css({
			"height" : "0px",
			"margin" : "0px"
		});

		$("#head, #foot, #main, .footline, .footlinks").css({
			"min-width" : "960px"
		});

	}
});
