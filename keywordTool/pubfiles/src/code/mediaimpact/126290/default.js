integration.meta = {
   'sectionID' : '126290',
   'siteName' : 'Sportbild (DE campaigns only) - Tablet - (INT)',

   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.telemetry.setup({
   'url': true,
   'ad-served': true,
   'base-ready': true,
   'ad-call-response': true,
   'ad-call': true,
   'failed-test': true,
   'impression': true,
   'custom': true
});

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706816',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#outerWrapper, #sabMobileSystemBanner").css({
			"max-width" : "1024px"
		});
		$("#sabMobileSystemBanner").css({
			"min-width" : "0px"
		});

		$("#innerWrapper").css({
			"margin" : "0 auto"
		});

    $("#fullBanner").css({
			"display" : "none"
		});

    $("head").append("<style>#sabMobileSystemBanner > div {display: none;}</style>");

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#outerWrapper, #sabMobileSystemBanner").css({
				"margin-left" : "0px"
			});
		} else {
			$("#sabMobileSystemBanner").css({
				"margin" : "0 auto"
			});
		}
	}
});
