integration.meta = {
	"sectionID": "128301",
	"siteName": "The Evening Standard",
	"publisher": "eveningstd",
	"platform": "tablet"
};

integration.testParams = {};

integration.channelHome = ['/news', '/news/crime', '/sport/football', '/news/london', '/showbiz', '/sport/football/chelsea', '/comment', '/news/politics', '/business', '/sport/football/tottenham', '/'];

integration.params = {
	'mf_siteId': '1001497',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1000,
	'plr_FastInit': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_URLKeywords': 2,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_StartScrollOnAnchor': true,
	"plr_ConsentTimeout": 3,
	'plr_PageScanExclude' : ' .full-menu, #footer, .tbl-feed-container, #comments '
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('body').addClass('wrapped_by_ads');
		$(".ad-leaderboard").css({
			"max-height": "0px"
		});
		$("#mastfooter").css({
			"max-width": "1000px",
			"margin": "0 auto"
		});
		integration.base.setCfg({
			'plr_ScrollAdjustment': 80
		});
		if ($("body.theme-go").length == 1) {
			integration.base.setCfg({
				'plr_ScrollAdjustment': 48,
				'plr_PageHeightAdjustment': -48
			})
		}
		$("#inskinanchor").css({
			"margin-top": "52px"
		});
		$("head").append("<style>#full-article{margin-top: 10px !important;}</style>");
		$("#full-article, body.section.theme-go .footer, .theme-go .main-menu-wrapper, .top-container.video").css({
			"max-width": "1000px",
			"margin": "0 auto"
		});
		$("head").append("<style>.top-container.video.sticky:not(.closed) .hero-wrapper {width: 1000px !important; margin: 0 auto; right: 0; left: 0;}</style>");
		window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {};
		};
		$("head").append("<style>body{margin-left: 20px !important;} #masthead{margin-left: -20px !important;} .leaderboard{margin: 20px 0 !important;}</style>");

		//Iterates through AMP ad slots to find leaderboard and collapse it (Intended to be a temp solution, if still here please work with ESI to implement a class on their side)
		var a = $("amp-ad");
		for (var i = 0; i < a.length; i++) {
			var b = $("amp-ad:eq(" + i + ")");
			if (b.css('width') == "728px") {
				$(b).parent().addClass("inskinLead");
			}
		}
		var stylesCSS = '<style id="inskinLBStyles" type="text/css">';
		stylesCSS += 'amp-sticky-ad.inskinLead{display: inline-block !important;} ';
		stylesCSS += '.inskinLead .i-amphtml-sticky-ad-layout{visibility: visible !important;} ';
		stylesCSS += '.inskinLead .i-amphtml-hidden-by-media-query{display: inline-block !important;} ';
		stylesCSS += '</style>';
		$('body').append(stylesCSS);
		//Collapse code ENDS HERE


		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment': 'left'
			});
			$("head").append("<style>body{margin-left: 20px !important;} #masthead{margin-left: -20px !important;} .leaderboard{margin: 20px 0 !important;}</style>");
			$('#content').css({
				'margin-left': '0px'
			});
			$("body").css({
				"width": "initial"
			});
			$(".section-content, #footer, #full-article, .main-menu-wrapper").css({
				"max-width": "1000px",
				"margin-left": "0px"
			});
		}
		try {
			if (typeof window.grid != 'undefined') {
				window.grid.recalculate();
			}
		} catch (e) {}
	}
});
