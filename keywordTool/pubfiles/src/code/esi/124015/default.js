integration.meta = {
	"sectionID" : "124015",
	"siteName" : "The Independent",
	"publisher" : "independent",
	"platform" : "desktop"
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = ['/news/uk', '/', '/infact', '/news/world', '/voices', 'news/business', '/news/uk/politics', '/topic/brexit', '/news/world/americas', '/arts-entertainment/tv', '/news/science', '/sport/rugby/rugby-union', '/arts-entertainment/music', '/sport/football', '/news/world/americas', '/video', '/sport/football/world-cup'];

integration.params = {
	'mf_siteId' : '681759',
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
	'plr_ScrollAdjustment' : 94,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	// 'plr_PageScanExclude' : "#most-popular-mobile, .video-playlist, .sidebar, #taboola-below-article-thumbnails, #commentsDiv, script, .taboola, .comments",
	//"plr_AnchorFixedSides" : true,
	"plr_ConsentTimeout" : 3,
	'plr_PageScanExclude' : ' #masthead, .sidebar, .taboola, .comments, .tbl-feed-container, #footer, #subnav-menu '
};

integration.on('adCallResult', function(e) {
	$('body').addClass('wrapped_by_ads');
	parent.stickyMe = false
	$("#mastfooter").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
	$("#leaderboard").css({
		"position" : "inherit",
		"width" : "1000px",
		"margin-left" : "auto",
		"margin-right" : "auto",
		"margin-top" : "0px"
	});

	//Ensures skin is not covered by nav on loans & credit section of the site
	$('html').addClass('inskinLoaded');
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
		stylesCSS += '.inskinLoaded body{padding:95px 0px 0px 0px !important;} ';
		stylesCSS += '</style>';
		$('body').append(stylesCSS);
	//Ends here

	//collapse the leaderboard
	$(".ad-leaderboard").hide();
	try {
		if ( typeof window.Drupal.behaviors.grid != 'undefined') {
			window.Drupal.behaviors.grid.recalculate();
		}
	} catch(e) {
	}
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/71347885/_main_independent_passback/in_ros/in_inskin', [728, 90]).display();\n<\\script>";
};