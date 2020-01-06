integration.meta = {
	"sectionID" : "124792",
	"siteName" : "Adorocinema ",
	"publisher" : "webedia",
	"platform" : "desktop"
};

integration.testParams = {
   "desktop_resolution" : [0]
};

integration.params = {
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$(".ism-frame").css({
		"z-index" : "502"
	});
	$("#nav").css({
		"width" : "980px",
		"margin" : "0 auto"
	});
	$("body").css({
		"background-color" : "transparent"
	});
	$("head").append("<style>#feedbackify {z-index: 5 !important;}</style>");
});
