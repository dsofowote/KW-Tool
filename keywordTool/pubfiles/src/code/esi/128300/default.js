integration.meta = {
	'sectionID' : '128300',
	'siteName' : 'The Evening Standard - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = ['/news', '/news/crime', '/sport/football', '/news/london', '/showbiz', '/sport/football/chelsea', '/comment', '/news/politics', '/business', '/sport/football/tottenham', '/'];

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
	'plr_StartScrollOnAnchor' : true,
	'plr_PageHeightAdjustment' : -48,
	"plr_ConsentTimeout" : 3,
	'plr_PageScanExclude' : ' #masthead, #footer, .sidebar, .tbl-feed-container, #comments '
};

document.inskin_displayed = false;

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.gutter-ads{display: none !important;}</style>");
		document.inskin_displayed = true;
		$("#full-article").css({
			"margin-top" : "10px"
		});
		$("body.section.theme-go .footer, .theme-go .main-menu-wrapper, .top-container.video").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.top-container.video.sticky:not(.closed) .hero-wrapper {width: 1000px !important; margin: 0 auto; right: 0; left: 0;}</style>");

		//#leaderboard is collapsing the ad unit on the Dev site
		$("#content .ad-leaderboard, #leaderboard").hide();
		var headHeight = $('#masthead').height() + $('nav').height();
		var headHeight1 = $('#masthead').height();
		integration.base.setCfg({
			plr_ScrollAdjustment : headHeight,
			plr_PageHeightAdjustment : -headHeight1

        });

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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/71347885/_main_eveningstandard_passback/es_ros/es_inskin', [728, 90]).display();\n\n<\\script>";
};
