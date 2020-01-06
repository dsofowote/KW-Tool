integration.meta = {
   'sectionID' : '126786',
   'siteName' : 'The Evening Standard - Desktop - (US)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707156',
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

document.inskin_displayed = false;

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		document.inskin_displayed = true;
		$("#content .ad-leaderboard").hide();
	};
	$('head').append('<style type="text/css">.video-popout-wrap.sticky {width: 1000px;}</style>');
});

integration.on('adServed', function(e) {
	$('body').addClass('wrapped_by_ads');
	$("#mastfooter").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
	try {
		if ( typeof window.grid != 'undefined') {
			window.grid.recalculate();
		}
	} catch(e) {
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/71347885/_main_eveningstandard_passback/es_ros/es_inskin', [728, 90]).display();\n<\\script>";
};
