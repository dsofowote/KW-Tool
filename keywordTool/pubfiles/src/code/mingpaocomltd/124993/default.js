integration.meta = {
	"sectionID" : "124993",
	"siteName" : "Partyline",
	"publisher" : "mingpao",
	"platform" : "desktop"
};

integration.testParams = {
  "desktop_resolution": [1256]
};

integration.params = {
	'mf_siteId' : '707770',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 996,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "aswift_0_anchor, aswift_1_anchor, aswift_2_anchor",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#bkg_wrapper").css("overflow", "auto");
		$("body").css({
			"background-image" : "none",
			"height" : "auto"
		});
		try {
			jQuery(window).trigger("resize");
		} catch (e) {
		}
	}
});
