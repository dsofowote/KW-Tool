integration.meta = {
	'sectionID' : '128209',
	'siteName' : 'AsiaOne - Tablet - (SG) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '989607',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#sticky-wrapper, div.screen-to-screen.widget.black, .region.region-pre-footer, .region.region-footer').css({
			"width" : "1280px",
			"margin" : "0 auto"
		});
		$('head').append('<style>.col-xs-12:nth-of-type(1){display:none !important}</style>');

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#sticky-wrapper, div.screen-to-screen.widget.black, .region.region-pre-footer, .region.region-footer, main.container').css({
				"margin" : "0"
			});
		}
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};

