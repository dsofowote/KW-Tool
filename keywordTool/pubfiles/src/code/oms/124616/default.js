integration.meta = {
	"sectionID" : "124616",
	"siteName" : "Frankfurter Neue Presse",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706363',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1024,
	"plr_PageAlignment" : "left",
	"plr_HideElementsByID" : "middlebar",
	"plr_HideElementsByClass" : "superbanner",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adServed", function(e) {
	$(".offsetwrapper").css({
		"margin" : "10px 0 0 0"
	});
	$(".id-SiteBEEPWrap").css({
		"margin-left" : "0px"
	});
	$("head").append("<style>#InSkinBrowser0 a.active {height: auto !important; width: auto !important;}</style>");
});
