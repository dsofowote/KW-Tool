integration.meta = {
	'sectionID' : '126930',
	'siteName' : 'CNBC - Smartphone - (INT excl. UK, ASIA, AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707917',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#cnbc-new-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#cnbc-new-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("body").css({
			"overflow" : "visible"
		});
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("#cnbc-contents, .newsletter a").css({
		"max-width" : "calc(100% - " + integration.custom.FrameSideRight + "px)"
	});
	$("head").append("<style>#social-tools-panel{left:initial !important;right:" + integration.custom.FrameSideRight + "px !important;z-index:999999}</style>");
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange()
		$("#cnbc-contents, #cnbc-new-header, .newsletter a, #social-tools-panel").css({
			//"max-width" : 100 % -integration.custom.FrameSideRight
			"max-width" : "calc(100%  - integration.custom.FrameSideRight + 'px')"
		});
	});
});