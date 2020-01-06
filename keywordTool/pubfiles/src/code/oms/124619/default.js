integration.meta = {
	"sectionID" : "124619",
	"siteName" : "Weser Kurier",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706264',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "inhalte_superbanner",
	"plr_HideElementsByClass" : "adobj, fullbanner, adsbygoogle",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#nfy_container_outer").css({
			"width" : "980"
		});
		$("#container_banner").hide();
	}
});
