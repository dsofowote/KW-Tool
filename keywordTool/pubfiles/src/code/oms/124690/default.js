integration.meta = {
	"sectionID" : "124690",
	"siteName" : "Braunschweiger Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706262',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 960)/2;
		$("#superbanner > table").css({
			"height" : "auto"
		});
		$("#werbung").css({
			"margin-left" : "200px"
		});
		$("head").append('<style>.author-social .socialbar.sticky, .author-social .socialbar.solid{margin-left: -2.75em !important;} </style>');
	}
});
