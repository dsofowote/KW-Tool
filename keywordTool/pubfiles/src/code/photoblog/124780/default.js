integration.meta = {
	"sectionID" : "124780",
	"siteName" : "Photoblog   ",
	"publisher" : "photoblog",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1460]
};

integration.params = {
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1200,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$(".ism-frame").css({
		"z-index" : "100"
	});
});
