integration.meta = {
	"sectionID" : "125105",
	"siteName" : "Last.fm (Germany)",
	"publisher" : "cbs",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1490]
};

integration.params = {
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1230,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_PageAlignment" : "center",
	'plr_PageHeightAdjustment' : -340,
	'plr_HideElementsByID' : "leader_top, mpu_top, mpu_bottom, leader_bottom",
	'plr_HideElementsByClass' : "",
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 60
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			var offset = $("#inskinanchor").offset();
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -offset.top
			});
		}

		$("footer").css({
			"max-width" : "1230px",
			"margin" : "0 auto"
		});

		$("html").css({
			"background-color" : "#f9f9f9"
		});

		if ($('.header-metadata-global-stats').length == 1) {
			$("#inskinanchor").css({
				"margin-top" : "20px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".site-footer").css({
		"width" : "1010px",
		"margin" : "0 auto"
	});
}); 