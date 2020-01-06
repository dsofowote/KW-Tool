integration.meta = {
    'sectionID' : '130164',
    'siteName' : 'ESPN - Desktop - ( CA US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105074',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		integration.custom.height = $("#header-wrapper").height();
		$(".ad-banner-wrapper, .ad-slot-banner, .Ad--banner").hide();
		if ($("body > #global-viewport > #header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-container");
			integration.base.setCfg({
				"plr_AnchorParent": "#inskinanchor",
				'plr_PageHeightAdjustment': -integration.custom.height
			});
		} else if ($(".page-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".page-container");
			$("head").append("<style> #inskinanchor > :first-child {z-index:auto!important;}</style>");
			integration.base.setCfg({
				"plr_AnchorParent": "#inskinanchor",
				'plr_PageHeightAdjustment': -integration.custom.height
			});
		} else if ($("#main-container").length == 0) {
			$("head").append("<style> #inskinanchor > :first-child {z-index:auto!important;}</style>");
			$("<div id='inskinanchor'></div>").insertBefore("#content");
			integration.base.setCfg({
				"plr_AnchorParent": "#inskinanchor",
				'plr_PageHeightAdjustment': -integration.custom.height
			});
		}
		window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {}
		};
	}
});

integration.on("adServed", function (e) {
	$(".ism-frame").parent().css({
		"z-index": "1000055"
	});
});


