integration.meta = {
	"sectionID" : "125341",
	"siteName" : "Runnersworld",
	"publisher" : "stroeer",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1280]
};

integration.params = {
	'mf_siteId' : '706301',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_PageHeightAdjustment" : -143,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		integration.base.setCfg({
			plr_PageHeightAdjustment : 10
		});
		$("#flashbuehne").css({
			"height" : "0px"
		});
		$("#container").css({
			"margin-left" : "0px"
		});
		$("#header, #topthemen, #main").css({
			"margin-left" : "20px"
		});
		$(".clearer + #topthemen").css({
			"margin-left" : "0px"
		});
	}
});
