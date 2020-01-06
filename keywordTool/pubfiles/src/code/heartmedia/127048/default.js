integration.meta = {
	'sectionID' : '127048',
	'siteName' : 'Luxuo - Tablet - (SG)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707606',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1160,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("header.global-header").css({
			"display" : "none"
		});
		$("#footer-container").css({
			"width" : "1140px"
		});
		$("head").append("<style>header.global-header{display:none !important} #mobile-header, #mobile-menu{display:block !important}</style>");
		$("#mobile-header").css({
			"display" : "initial",
			"max-width" : "1160px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("#logo").css({
			"max-width" : "140px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("header.global-header, .content.row, #footer-container").css({
				"margin-left" : "0",
			});
		}
	}
});

integration.on('adServed', function(e) {
	$("#mobile-header").css({
		"top" : "100px"
	});
	$(window).bind('scroll', function() {
		if ($(window).scrollTop() > 100) {
			$("#mobile-header").css({
				"top" : "0px"
			});
		} else {
			$("#mobile-header").css({
				"top" : "100px"
			});
		}
	});
});
