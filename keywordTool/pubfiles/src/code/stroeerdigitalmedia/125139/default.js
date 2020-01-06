integration.meta = {
	'sectionID' : '125139',
	'siteName' : 'Spox - Tablet - (AT CH DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706751',
	'plr_PageAlignment' : 'custom',
	//'plr_FramePositionCSS' : 'margin: 0 auto; border-left: transparent solid 10px;',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		}
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

