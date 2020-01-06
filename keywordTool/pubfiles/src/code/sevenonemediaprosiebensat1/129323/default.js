integration.meta = {
    'sectionID' : '129323',
    'siteName' : 'SPOX - DESKTOP - (DE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072368',
    'plr_PageAlignment' : 'custom',
    'plr_FramePositionCSS' : 'left: -250px; margin: 0 auto;',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var MarginLeft = $(".pgCenterP").css("margin-left");
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
