integration.meta = {
	'sectionID' : '128300',
	'siteName' : 'The Evening Standard - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = ['/news', '/news/crime', '/sport/football', '/news/london', '/showbiz', '/sport/football/chelsea', '/comment', '/news/politics', '/business', '/sport/football/tottenham'];

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1001496',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords' : 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

document.inskin_displayed = false;

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : 81
		});
		if ($("body.theme-go").length == 1) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 48,
				'plr_PageHeightAdjustment' : -48
			})
		}
		document.inskin_displayed = true;
		$("#inskinanchor").css({
			"margin-top" : "52px"
		});
		$("#full-article").css({
			"margin-top" : "10px"
		});
		$("body.section.theme-go .footer, .theme-go .main-menu-wrapper, .top-container.video").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.wrapped_by_ads:not(.takeover-loaded) .leaderboard {display: block !important; width: 1000px;}</style>");
		$("head").append("<style>.top-container.video.sticky:not(.closed) .hero-wrapper {width: 1000px !important; margin: 0 auto; right: 0; left: 0;}</style>");

	};
	$('head').append('<style type="text/css">.video-popout-wrap.sticky{width: 1000px;}</style>');
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

