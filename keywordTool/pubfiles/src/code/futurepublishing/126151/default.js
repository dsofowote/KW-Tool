integration.meta = {
	'sectionID' : '126151',
	'siteName' : 'Polygon - Tablet - UK',
	
	'platform' : 'tablet',
	'restrictions' : ''
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '706992',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".m-site-nav__shelf").css({
			"z-index" : "5"
		});
		$(".m-site-nav").css({
			"position" : "fixed",
			"top" : "0px"
		});
		$(".m-feature-modern__hero").css({
			"max-width" : "1100px",
			"margin" : "0px auto",
			"margin-top" : "15px"
		});
		$(".m-feature-modern__body").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$("#polybar_spacer, #body-wrapper > .m-ad__leaderboard").css({
			"height" : "0px",
			"margin" : "0"
		});
		$("#polybar_spacer, #body-wrapper > .m-ad__leaderboard").hide();
		$("head").append("<style>#polybar_spacer{height:0px !important;}</style>");
		$("body").css({
			"margin-top" : "51px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#body-wrapper").css({
				"max-width" : "1100px"
			});
			/* $(".top_clickers").hide();*/
			$(".m-site-nav").css({
				"margin-left" : "-20px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "0"
	});
});

window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">    googletag.pubads().definePassback(\n    \"/8644/Games_Polygon/dfp-passback/Inskin\", [728, 90]).display();\n<\\script>";
};
