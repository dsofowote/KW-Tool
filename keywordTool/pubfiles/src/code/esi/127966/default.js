integration.meta = {
   'sectionID' : '127966',
   'siteName' : 'The Independent - Desktop - (APAC) ',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '957430',
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
	$("#mastfooter").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});

	$("#content .ad-leaderboard").hide();
	/*$(".sceneContainerOuter").css({
	 "margin-top"  :"48px"
	 });*/
	try {
		if ( typeof window.Drupal.behaviors.grid != 'undefined') {
			window.Drupal.behaviors.grid.recalculate();
		}
	} catch(e) {
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/71347885/_main_independent_passback/in_ros/in_inskin', [728, 90]).display();\n\n<\\script>";
};
