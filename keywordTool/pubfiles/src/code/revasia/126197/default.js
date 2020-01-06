integration.meta = {
   'sectionID' : '126197',
   'siteName' : 'Business Insider Indonesia - Mobile - (SG)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706998',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 62,
	'plr_PageHeightAdjustment' : -24
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#menubar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#menubar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("#menubar").css({
			"margin-bottom" : "0px"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var wheight = $(window).height();
	var headerbrand = $("#menubar");
	$("#menubar, .top-network-bar").css({
		"min-width" : wwidth
	});
}
