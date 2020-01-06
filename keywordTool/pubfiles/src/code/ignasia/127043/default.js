integration.meta = {
	'sectionID' : '127043',
	'siteName' : 'Ask Men - Tablet - (SEA)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707726',
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > #main").length == 1) {
			var innerheight = $("#headerOuter").height();
			var outerheight = $("#quickMenu").height();
			var navbarheight = outerheight + innerheight;
			$("<div id='inskinanchor'></div>").insertBefore("body > #main");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -85
			});
			
			$("#inskinanchor").css({
				"margin-top" : navbarheight
			});
		}
		
		$("#headerOuter").css({
			"top" : "0"
		});

		$('#main').css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"padding" : "0"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$('#main').css({
				"margin" : "0"
			});
			$('#header').css({
				"left" : "0"
			});
			$('#nav').css({
				"margin-left" : "-20px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}

	}
});

