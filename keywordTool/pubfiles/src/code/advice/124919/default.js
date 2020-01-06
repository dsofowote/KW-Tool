integration.meta = {
	"sectionID" : "124919",
	"siteName" : "Derpostillon",
	"publisher" : "advice",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1290]
};

integration.params = {
	'mf_siteId' : '707366',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 970,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "reklame-leaderboard-unten, [id^=google_ads_]",
	"plr_HideElementsByClass" : "post-body"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page-wrap").css({
			"width" : "970px"
		});
		$("#topads-wrapper").css({
			"width" : "970px",
			"margin" : "0 auto"
		});
		$("#page-outer").css({
			"margin-top" : "-20px"
		});
		$("head").append("<style>body{overflow-x: visible !important;} #at4-recommendedside-outer-container {visibility : hidden;} .advice-logo{right: 5px !important; top: 40px !important;} .blogger-infected{width: 960px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100040"
	});
	$("#at4-drawer-arrow").css({
		"z-index" : "100039"
	});
});
