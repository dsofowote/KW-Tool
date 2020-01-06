integration.meta = {
	"sectionID" : "123973",
	"siteName" : "Interactive Investor",
	"publisher" : "interactiveinvestor",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	
   'mf_siteId': '681799',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "",
	"plr_PageHeightAdjustment" : 250,
	"plr_FastInit" : true
};

integration.on("layoutChange", function(e) {
	integration._addPixel();
	var topm = e.data.plr_FrameTop + 6;
	$("#pre-header-blocks").css({
		"margin-top" : topm
	});
});
