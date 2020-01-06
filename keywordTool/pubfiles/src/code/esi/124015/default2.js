integration.meta = {
	"sectionID" : "124015",
	"siteName" : "The Independent",
	"publisher" : "independent",
	"platform" : "desktop"
};




integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = [
   '/',
   '/news/uk',
   '/news/world',
   '/voices',
   '/news/uk/politics',
   '/topic/brexit',
   '/news/world/americas',
   '/arts-entertainment/tv',
   '/news/science',
   '/sport/rugby/rugby-union',
   '/arts-entertainment/music',
   '/sport/football',
   '/news/world/americas',
   '/video'
];

integration.params = {
   'mf_siteId': '681759',
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
	'plr_ScrollAdjustment' : 48,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_PageScanExclude' : ".sidebar, .video-playlist, #commentsDiv, #taboola-below-article-thumbnails, script"
	//"plr_AnchorFixedSides" : true
};

integration.on('adCallResult', function(e) {
	$('body').addClass('wrapped_by_ads');
	parent.stickyMe = false
	$("#mastfooter").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
	$("#leaderboard").css({
		"min-height" : "0px"
	});
	//collapse the leaderboard
//	$(".ad-leaderboard").hide();
	try {
		if ( typeof window.Drupal.behaviors.grid != 'undefined') {
			window.Drupal.behaviors.grid.recalculate();
		}
	} catch(e) {
	}
});



/* Passback Tag
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/71347885/_main_independent_passback/in_ros/in_inskin\" height=\"90\" width=\"728\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
 };*/
