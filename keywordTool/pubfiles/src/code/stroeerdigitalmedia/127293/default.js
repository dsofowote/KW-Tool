integration.meta = {
	sectionID : "127293",
	site : "GoFeminin - Desktop - (DACH)",
	product : "PageSkin on desktop"
};

integration.testParams = {
	desktop_resolution : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707579',
	'plr_PageAlignment' : "center",
	'plr_ContentW' : 1060,
	'plr_ContentType' : "PAGESKINEXPRESS",
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : "",
	'plr_HideElementsByClass' : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -137,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 54
			})
		}
		$("#footer").css({
			"max-width" : "1060px",
			margin : "0 auto"
		});

		$("#sas_banner").css({
			"height" : "0px"
		});
		$('#div-gpt-ad-banner').hide();
		$('.af-banner').hide();

	}
});
