integration.meta = {
	'sectionID' : '127951',
	'siteName' : 'The Independent US - Tablet - US',
	'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '954519',
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
	'plr_ScrollAdjustment' : 48
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#content .ad-leaderboard").hide();
		$("#content, #mastfooter").css({
			"max-width" : "1000px",
			"margin" : "20px auto"
		});
		$('.stamp').css({
			"margin-left" : "10px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#content').css({
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
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/71347885/_main_independent_passback/in_ros/in_inskin', [728, 90]).display();\n<\\script>";
};
