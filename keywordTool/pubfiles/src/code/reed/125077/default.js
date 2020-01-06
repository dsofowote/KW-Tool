integration.meta = {
	"sectionID" : "125077",
	"siteName" : "New Scientist",
	"publisher" : "reed",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	
	'mf_siteId' : '706281',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1130,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "hldhdAds, skcolAdSky",
	"plr_HideElementsByClass" : "pnlMPU",
	'plr_URLKeywords' : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("header, nav, footer").css({
			"max-width" : "1130px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});

		$("#rbiCookiePolicy_pushDownBoxWrapper, #hdkey, #hldhdSubjectNavKey, #hldft").css({
			"width" : "990px",
			"margin" : "0 auto"
		});

	}
});
