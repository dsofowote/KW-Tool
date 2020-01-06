integration.meta = {
	'sectionID' : '127654',
	'siteName' : 'Goal.com/de - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '776314',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".module-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".module-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -80,
			});
		}
		$("body, html").css({
			"overflow" : "visible"
		});

		$(".widget-header").css({
			"height" : "0px"
		});
	}
});

integration.on('adServed', function(e) {
	var headHeight = $(".widget-header__wrapper").outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : headHeight,
		"z-index" : "20000"
	});
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
	var cont = wwidth - integration.custom.FrameSideRight

	$(".page-container, .main-content").css({
		"max-width" : cont
	});
}