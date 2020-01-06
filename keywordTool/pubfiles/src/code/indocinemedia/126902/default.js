integration.meta = {
	'sectionID' : '126902',
	'siteName' : 'Robb Report - Smartphone - (Asia) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -52
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("html").css({
			"overflow" : "visible"
		});
		$("body").css({
			"overflow-y" : "visible",
			"overflow-x" : "hidden"
		});
		//lol
		if ($("#global-header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#global-header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.laychange();
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function(){
	var wwidth = $(window).width()
	var wheight = $(window).height()
	integration.custom.headHeight = $('#global-header-wrapper').outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : integration.custom.headHeight
	});
	if(wwidth > wheight){
		$("#footer-items").css({
			"height" : "30px"
		});
	} else {
		$("#footer-items").css({
			"height" : "50px"
		});
	}
}

