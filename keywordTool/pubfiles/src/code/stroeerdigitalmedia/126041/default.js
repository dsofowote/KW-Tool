integration.meta = {
	'sectionID' : '126041',
	'siteName' : 'Giga',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707814',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_PageHeightAdjustment' : -36,
	'plr_HideElementsByID' : 'hockeystickl',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
};

// integration.on("layoutChange", function(e) {
// 	try {
// 		var advertID = integration.params.plr_CachedISAPResponse.PageSkinAd.CampaignID;
// 	} catch(e) {
//
// 	}
// 	if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
// 		$("#inskinanchor").css({
// 			"margin-top" : "42px"
// 		});
// 		$("head").append("<style>.SubmenuNews--hidden{transform: translateY(0px) !important;-webkit-transform: translateY(0px) !important;-ms-transform: translateY(0px) !important;}</style>");
// 	}
// });


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#outerbottom, #outermid").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		$("#outertop3").hide();
		var subNavHeight = $(".SubmenuNews").height();
		$("head").append("<style>.ismSubNav{margin-top: " + subNavHeight + "px}</style>");
	}
});
