integration.meta = {
	"sectionID" : "124300",
	"siteName" : "The Independent",
	"publisher" : "independent",
	"platform" : "tablet"
};




integration.testParams = {};

integration.channelHome = [
   '/news/uk',
   '/',
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
   'mf_siteId': '681749',
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
	'plr_PageScanExclude' : "#most-popular-mobile, .video-playlist, #commentsDiv, script, #taboola-below-article-thumbnails"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		//$("#content .ad-leaderboard").hide();
		$('body').addClass('wrapped_by_ads');
		$("#mastfooter").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#content, #content .region-content').css({
				'margin-left' : '0px'
			});
			$("body").css({
				"width" : "initial"
			});
			$("#mastfooter").css({
				"max-width" : "1000px",
				"margin-left" : "0px"
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/71347885/_main_independent_passback/in_ros/in_inskin', [728, 90]).display();\n\n<\\script>";
};
