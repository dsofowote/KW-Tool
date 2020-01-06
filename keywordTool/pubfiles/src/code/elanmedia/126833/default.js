integration.meta = {
	'sectionID' : '126833',
	'siteName' : 'Huffington Post - Tablet - (UAE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707152',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#ad_leaderboard_flex, #ad_right_rail_flex').css({
			"display" : "none"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#wrapper").css({
				"margin-left" : "0px"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var socialbtns = $('#social_badges');
	if (width < 1240) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1000) / 2;
		var rowcss = "<style>#social_badges{right:"
		rowcss += sideWidth;
		rowcss += "px !important}</style>"
		
		/* content width divided by 2 */
		console.log('if statement fired');
		$("#social_badges").css({
			"right" : sideWidth + 20
		});
		
		console.log(sideWidth);
		console.log(socialbtns);
		$("head").append(rowcss);
	} else {
		$("#social_badges").css({
			"right" : "10px"
		});
	}
}