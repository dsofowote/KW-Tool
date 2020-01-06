integration.meta = {
   'sectionID' : '128302',
   'siteName' : 'The Evening Standard - Desktop - ( INT )',
   'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = ['/news', '/news/crime', '/sport/football', '/news/london', '/showbiz', '/sport/football/chelsea', '/comment', '/news/politics', '/business', '/sport/football/tottenham', '/'];

integration.params = {
  'mf_siteId' : '1001498',
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
				'plr_ScrollAdjustment' : 48
			})
		}
		document.inskin_displayed = true;
		$("#inskinanchor").css({
			"margin-top" : "52px"
		});
		$("body.section.theme-go .footer, .theme-go .main-menu-wrapper").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		//#leaderboard is collapsing the ad unit on the Dev site
		$("#content .ad-leaderboard, #leaderboard").hide();
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
