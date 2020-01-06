integration.meta = {
	'sectionID' : '126804',
	'siteName' : 'Marie Claire Idees - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708022',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -222,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 64
			});
		}
		$("#socialbanner").css({
			"max-width" : "1002px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		$("#body, #footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("#popinfacebook").css({
			"z-index" : "999"
		});
		$("#page").css({
			"margin-top" : "0"
		});
		$(".BodyContent").css({
			"padding" : "0"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"//static.adserver.pm/position/MARIE_CLAIRE_IDEES/RG_NEW/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};
