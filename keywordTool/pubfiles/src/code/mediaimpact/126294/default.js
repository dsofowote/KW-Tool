integration.meta = {
	'sectionID' : '126294',
	'siteName' : 'Transfermarkt - (DE campaigns only) - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706788',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>body{overflow-x:visible;padding-right:0px;width:auto;} #andereSprache{position: relative;}</style>");
		$("#header, .navibalken, #main, #andereSprache, .navihalter").css({
			"max-width" : "960px",
			"overflow" : "hidden"
		});
		//Collapsing leaderboard slot
		$("head").append("<style>#werbung_superbanner{display: none !important;}</style>");
		$("#main").css({
			"margin-left" : "0",
			"margin-top" : "10px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('.naviback.hide-for-small.hide-for-print, .megamenu_container.megamenu_dark_bar.megamenu_dark').css({
				'max-width' : '960px'
			});
		}
	}
});

integration.on("adServed", function(e) {
	$("#main").css({
		"z-index" : "4"
	});
	$(".ism-frame").parent().css({
		"z-index" : "5"
	});
});
