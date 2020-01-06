integration.meta = {
   'sectionID' : '126318',
   'siteName' : 'InStyleUS - Smartphone - (UK)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707997',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : 0,
   'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50
			});
		}
		$("#main").css({
			"padding-top" : "15px"
		});
		$("#header").css({
			"top" : "0"
		});
		$("#header-advert").css({
			"height" : "0"
		});
		$(".layout-content").css({
			"padding-top" : "0"
		});
		$("head").append("<style>#pagebody{padding-top: 47px !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	$(".bh-stp-btn, .share-this").css({
		"right" : integration.custom.FrameSideRight
	});
	$("#_evh-link").css({
		"margin-right" : integration.custom.FrameSideRight
	});
	//$("#_evh-link").attr("style","right:74px !important");
}
