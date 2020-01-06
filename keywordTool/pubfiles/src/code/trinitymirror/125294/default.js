integration.meta = {
	"sectionID" : "125294",
	"siteName" : "Mirror Examiner",
	"publisher" : "mirror",
	"platform" : "desktop"
};

window.ISMPassback = function() {
	try {
		PageSkinFallback();
	} catch (e) {
	};
}

integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'mf_siteId' : '707818',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "div-gpt-ad-bottom-lb, div-gpt-ad-top-mpu",
	"plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"margin-top" : "0px"
		});
	}
});
