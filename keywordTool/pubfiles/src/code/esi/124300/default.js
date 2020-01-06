integration.meta = {
	"sectionID" : "124300",
	"siteName" : "The Independent",
	"publisher" : "independent",
	"platform" : "tablet"
};

integration.testParams = {};

integration.channelHome = ['/news/uk', '/', '/infact', '/news/world', '/voices', 'news/business', '/news/uk/politics', '/topic/brexit', '/news/world/americas', '/arts-entertainment/tv', '/news/science', '/sport/rugby/rugby-union', '/arts-entertainment/music', '/sport/football', '/news/world/americas', '/video', '/sport/football/world-cup'];

integration.params = {
	'mf_siteId' : '681749',
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
	'plr_ScrollAdjustment' : 90,
	// 'plr_PageScanExclude' : "#most-popular-mobile, .video-playlist, .sidebar, #taboola-below-article-thumbnails, #commentsDiv, script, .taboola, .comments",
	"plr_ConsentTimeout" : 3,
	'plr_PageScanExclude' : ' #masthead, #footer .full-menu-top, #subnav-menu, .taboola, .comments, .tbl-feed-container '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('wrapped_by_ads');
		$("#leaderboard").css({"max-height":"0px"});
		$("#mastfooter").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

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
				'plr_PageAlignment' : 'left'
			});

			$('#content, #content .region-content, .section-content').css({
				'margin-left' : '0px'
			});

			$("body").css({
				"width" : "initial",
				"padding-left" : "20px"
			});

			$("#mastfooter").css({
				"max-width" : "1000px",
				"margin-left" : "0px"
			});

			$("#masthead").css({
				"padding-right" : "20px"
			});
		}

		if ($("#subnav-menu").length >= 1){
			integration.base.setCfg({
				"plr_ScrollAdjustment" : 160
			});
		}

		try {
			if ( typeof window.Drupal.behaviors.grid != 'undefined') {
				window.Drupal.behaviors.grid.recalculate();
			}
		} catch(e) {
		}
	}
});