integration.meta = {
	"sectionID" : "125335",
	"siteName" : "Sports Network",
	"publisher" : "durham",
	"platform" : "desktop"
};

function setWindow() {
	return currentWindow.top;
}




integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {

  'mf_siteId': '681779',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 1,
	"plr_HideElementsByID" : "rightadvert, banner, mpu",
	'plr_FastInit' : true
};
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
	$("#container").append("<div class='clearfix'></div>");

	}
});
integration.on("adServed", function(e) {
	$("body").css({
		"background-image" : "none"
	});
	$("head").append("<style>#footer, #footer-top { margin: 0 auto; }</style>");
});
