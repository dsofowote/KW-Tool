integration.meta = {
	"sectionID" : "128301",
	"siteName" : "The Evening Standard",
	"publisher" : "eveningstd",
	"platform" : "tablet"
};

integration.testParams = {};

integration.channelHome = ['/news', '/news/crime', '/sport/football', '/news/london', '/showbiz', '/sport/football/chelsea', '/comment', '/news/politics', '/business', '/sport/football/tottenham'];

integration.params = {
	'mf_siteId' : '1001497',
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

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('wrapped_by_ads');
		$("#mastfooter").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		integration.base.setCfg({
			'plr_ScrollAdjustment' : 80
		});
		if ($("body.theme-go").length == 1) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 48,
				'plr_PageHeightAdjustment' : -48
			})
		}
		$("#inskinanchor").css({
			"margin-top" : "52px"
		});
		$("head").append("<style>#full-article{margin-top: 10px !important;}</style>");
		$("#full-article, body.section.theme-go .footer, .theme-go .main-menu-wrapper, .top-container.video").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.wrapped_by_ads:not(.takeover-loaded) .leaderboard {display: block !important; width: 1000px;}</style>");
		$("head").append("<style>.top-container.video.sticky:not(.closed) .hero-wrapper {width: 1000px !important; margin: 0 auto; right: 0; left: 0;}</style>");
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {
			};
		};
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body{margin-left: 20px !important;} #masthead{margin-left: -20px !important;} .leaderboard{margin: 20px 0 !important;}</style>");
			$('#content').css({
				'margin-left' : '0px'
			});
			$("body").css({
				"width" : "initial"
			});
			$(".section-content, #footer, #full-article, .main-menu-wrapper").css({
				"max-width" : "1000px",
				"margin-left" : "0px"
			});
		}
		try {
			if ( typeof window.grid != 'undefined') {
				window.grid.recalculate();
			}
		} catch(e) {
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/71347885/_main_eveningstandard_passback/es_ros/es_inskin', [728, 90]).display();\n\n<\\script>";
};

