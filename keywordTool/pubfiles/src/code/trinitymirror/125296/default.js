integration.meta = {
	"sectionID" : "125296",
	"siteName" : "Mirror Get Surrey",
	"publisher" : "mirror",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'mf_siteId' : '707276',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "div-gpt-ad-bottom-lb, div-gpt-ad-top-mpu",
	"plr_URLKeywords" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"margin-top" : "0px"
		});
	}
});
