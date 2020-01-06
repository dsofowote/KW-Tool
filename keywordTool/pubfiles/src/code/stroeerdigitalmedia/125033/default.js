integration.meta = {
	"sectionID" : "125033",
	"siteName" : "Spox",
	"publisher" : "stroeer",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '707263',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "custom",
	"plr_HideElementsByID" : "frnBanner, frnAdSky, frnContentAd, [id^=frnContentAd]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var MarginLeft = $(".pgCenterP").css("margin-left");
		integration.base.setCfg({
			'plr_FramePositionCSS' : 'margin-left: ' + parseInt(MarginLeft) + 'px;',
		});
		$("#frnBanner, #frnAdSky, #frnBannerAd").hide();
		if ($("#spxDxHeader").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#spxDxHeader");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -132,
				'plr_StartScrollOnAnchor' : true,
				"plr_ScrollAdjustment" : 48
			});
		}
		$("head").append("<style>#spxDxFooter .pgCenterP{margin-left: 0 !important; }</style>");
		$("#spxDxFooter").css({
			"margin-left" : MarginLeft,
			"width" : "980px"
		});
	}
});
