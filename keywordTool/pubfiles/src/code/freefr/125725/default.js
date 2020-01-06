integration.meta = {
	'sectionID' : '125725',
	'siteName' : 'Free',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706647',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
    "plr_StartScrollOnAnchor" : true,
    "plr_ScrollAdjustment" : 54
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#autourduheader').height();
		$("body").css({
			"margin-top" : headerHeight
		});
		integration.custom.isEdge = false;
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#autourduheader").css({
				"max-width" : "1000px",
				"margin-left" : "0",
				"left" : "20px"
			});
			$("#contenuhp > *, #contenu > *, #FreeNewFooterInside").css({
				"margin-left" : "0"
			});
			$("#FreeNewFooter").css({
				"padding" : "0"
			});
			$("#searchgoogle").css({
				"max-width" : "1000px"
			});
			$("head").append("<style>#navrub {left: 0 !important;}</style>");
			integration.custom.isEdge = true;
		}
	}
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	/*if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#autourduheader").css({
			"margin-top" : newheight
		});
	} else {
		$("#autourduheader").css({
			"margin-top" : "0px"
		});
	}*/

	if (integration.custom.isEdge) {
		/* Nav bar */
		var headHeight = $("#header").height();
		var googHeight = $("#searchgoogle").height();
		var pubHeadHeight = $("#pubheader").height();
		if (height < integration.custom.PageSkinTopPanel + headHeight + googHeight + pubHeadHeight) {
			var newheight = integration.custom.PageSkinTopPanel - height;
			$("#navrub").css({
				"margin-left" : "0px"
			});
		} else {
			$("#navrub").css({
				"margin-left" : "20px"
			});
		}
	}
}
