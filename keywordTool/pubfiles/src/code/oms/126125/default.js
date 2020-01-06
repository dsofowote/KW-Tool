integration.meta = {
    'sectionID' : '126125',
    'siteName' : 'Kreisanzeiger - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706830',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
	$('#skyscraper, #ad-sky').hide();
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$("head").append("<style>.vrm-button__scrollTop{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
		$("head").append("<style>.vrm-feedbackIcon{left: " + integration.custom.FrameSide + "px !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#app").css({
				"max-width" : "1000px",
				"margin-left:" : "0 auto"
			});
		}
	} else {
		$("#body-wrapper").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("#footer, #service").css({
			"padding-right" : "20px",
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
	}
	$("#page").css({
		"padding-right" : "0px"
	});
	$("#footer > .wrapper, #service > .wrapper").css({
		"padding-left" : "0px",
		"padding-right" : "0px"
	});
	integration.custom.BackToTopButton();
	$(window).resize(function() {
		integration.custom.BackToTopButton();
	});
});

integration.custom.BackToTopButton = function() {
	var width = $(window).width();
	if (width < 1620) {
		$("#toplink").css({
			"visibility" : "hidden"
		});
	} else {
		$("#toplink").css({
			"visibility" : "visible"
		});
	}
};
