integration.meta = {
	'sectionID' : '128062',
	'siteName' : 'The Evening Standard - Desktop - (ASIA)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '972622',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 48
};

document.inskin_displayed = false;

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		document.inskin_displayed = true;

		//Moving Pageskin under the header on the Dev site
		if ($("#nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nav");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -52,
				'plr_ScrollAdjustment' : 52
			});
		}
		$("#inskinanchor").css({
			"margin-top" : "52px"
		});
		//#leaderboard is collapsing the ad unit on the Dev site
		$("#content .ad-leaderboard, #leaderboard").hide();

	};
	$('head').append('<style type="text/css">.video-popout-wrap.sticky {width: 1000px;}</style>');
	window.unloadPageskin = function() {
		try {
			integration.destroy();
		} catch(e) {
		};
	};
});

integration.on('adServed', function(e) {
	$('body').addClass('wrapped_by_ads');
	try {
		if ( typeof window.grid != 'undefined') {
			window.grid.recalculate();
		}
	} catch(e) {
	}
});
