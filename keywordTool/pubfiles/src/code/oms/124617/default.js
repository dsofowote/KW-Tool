integration.meta = {
	"sectionID" : "124617",
	"siteName" : "General Anzeiger Bonn",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706399',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "superbanner",
	"plr_HideElementsByClass" : "teaserbanner"
};

integration.on("adServed", function(e) {
	$("#superbanner").css({
		"margin-top" : "10px"
	});
	$(".ad-superbanner").hide();
	$("head").append("<style>.ad-skyscraper.left, .ad-skyscraper.right{display: none !important;} .page-main{width: 100% !important;}</style>");
	$(".page, .page-content").css({
		"max-width" : "980px",
		"margin" : "0 auto"
	});
});
