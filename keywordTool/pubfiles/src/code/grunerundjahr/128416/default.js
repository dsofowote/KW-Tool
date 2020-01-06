integration.meta = {
	'sectionID' : '128416',
	'siteName' : '11 Freunde - Desktop - ( AT CH DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1010940',
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'left: -80px; margin: 0 auto;',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("head").append("<style>#at-cv-toaster.at-cv-mask{right: " + (integration.custom.FrameSideRight * 4 + 15) + "px !important;}</style>");
		$("head").append("<style>#page-wrapper {width: 1140px !important;}</style>");
		$("head").append("<style>.page {margin-left: 0px !important;}</style>");
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9999999999"
	});
});
