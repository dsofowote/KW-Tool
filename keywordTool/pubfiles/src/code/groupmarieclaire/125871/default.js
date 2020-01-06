integration.meta = {
	'sectionID' : '125871',
	'siteName' : 'Marie Claire',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707358',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1014,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_ScrollAdjustment' : 64,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				'plr_AnchorParent' : '#inskinanchor',
				'plr_PageHeightAdjustment' : -196,
				'plr_StartScrollOnAnchor' : true
			});
		}
		$("#socialbanner").css({
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"max-width" : "1014px"
		});
		$("#page, #footer, #afterFooter, #zoneBottom, #zoneTop, #beforeHeader").css({
			"max-width" : "1014px",
			"margin" : "0 auto"
		});

	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/MARIECLAIRE/RG_NEW/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};
