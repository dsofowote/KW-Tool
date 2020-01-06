integration.meta = {
	'sectionID' : '128219',
	'siteName' : ' Smooth - Desktop - (AU)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '992058',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#header').height() + $("#dfp-ad-smooth_home_leader1-wrapper").height();
		var leaderboardHeight = $('.dfp-tag-wrapper').height();
		var SubHeaderHeight = $('.nova-skin-foreground-image').height();
		var totalHeight = headerHeight + leaderboardHeight + SubHeaderHeight;
		var navHeight = $('.navbar').height();
		if ($("body .nova-skin-foreground-image").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#content .region .container .row:eq(0)");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -totalHeight - 16,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : navHeight
			});
		} else {
			$("<div id='inskinanchor'></div>").insertAfter("body #header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : headerHeight// + navHeight
			});
		}
		$('body').css({
			"overflow-x" : "visible"
		});
		$('#footer').css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/7426/SmoothFM', [[1,1]]).setTargeting(\"Keyword\", \"passback\") .setTargeting(\"pos\", \"1\").display();\n<\\script>";
};
