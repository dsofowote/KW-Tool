integration.meta = {
	'sectionID' : '126805',
	'siteName' : 'Marie Claire Idees - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707118',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1002,
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
				"plr_StartScrollOnAnchor" : true
			});
		}
		$("#page").css({
			"margin-top" : "0"
		});
		$(".SiteHeader-content, #body").css({
			"max-width" : "1002px",
			"margin" : "0 auto",
			"width" : "100% !important",
			"left" : "0",
			"right" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page").css({
				"max-width" : "1002px",
				"margin-left" : "0"
			});
			integration.custom.isEdge = true;
		}		
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$('head').append('<style type="text/css">#pulpix .px-sticky-widget.px-sticky-widget-left {left: ' + (integration.custom.FrameSide + 10) + 'px !important;}</style>');
	if (integration.custom.isEdge) {
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$("#socialbanner").css({
			"max-width" : "1002px",
			"margin-left" : integration.custom.FrameSide
		});
		$("#header").css({
			"margin-left" : 0 - integration.custom.FrameSide 
		});
		
		
	}
}); 

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10000"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/MARIE_CLAIRE_IDEES/RG_NEW/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};