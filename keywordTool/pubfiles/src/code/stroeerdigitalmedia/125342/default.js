integration.meta = {
	"sectionID" : "125342",
	"siteName" : "Womens Health",
	"publisher" : "stroeer",
	"platform" : "desktop"
};

integration.testParams = {
	//"desktop_resolution" : [1220]
	'desktop_resolution' : [0]
};

integration.params = {
	'mf_siteId' : '707828',
	"plr_ContentType" : "PAGESKINEXPRESS",
	'plr_PageAlignment' : 'center',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1100,
	"plr_UseFullVersion" : true,
	//"plr_FramePositionCSS" : "border-right: transparent solid 10px",
	//"plr_PageHeightAdjustment" : -100,
	"plr_HideElementsByID" : "",
	'plr_BarneyThresholdClicks' : 2,
	'plr_BarneyThresholdRate' : 1,
	"plr_FastInit" : true,
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 0,
	//"plr_GetContentHeightVersion" : 2
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -131
			});
		}
		$("#footer").css({
			"width" : "1100px"
		});
		$(".v-A_-wrapper--stroer").css({
			"padding" : "0px"
		});
		$("#div-gpt-ad-banner").css({
			"display" : "none"
		});
		$(".clearer").css({
			"margin-top" : "10px"
		});

	}
});

