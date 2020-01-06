integration.meta = {
	'sectionID' : '126859',
	'siteName' : 'Gumtree - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1366]
};

integration.flaggedTests = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707879',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2,
	// 'plr_InitOnFocus' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#header-new, #footer, .container--full-width, #react-root, .wrapper--white').css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
		$('.header__leaderboard-ad, .header__banner-container  ').css({
			"display" : "none",
		});

		$('.page').css({
			"max-width" : "1260px",
			"margin" : "0 auto"
		});
		$("head").append("<style>body{overflow-x: visible !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	var leaderboardHeight = $('.header__leaderboard-ad').outerHeight();
	$('.ism-frame').parent().addClass('inskinLoaded');
	if ($("div.header__leaderboard-ad").length == 1) {
		integration.base.setCfg({
			'plr_AnchorParent' : ".inskinLoaded",
			'plr_PageHeightAdjustment' : -leaderboardHeight,
			'plr_StartScrollOnAnchor' : true,
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- Beginning PassBack for Ad unit inskin ### size: [[970,250]] -->\n\t<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n\t\tgoogletag.pubads().definePassback('30720440/inskin', [[970,250]]).setTargeting('inskin',['970x250']).display();\n\t<\\script>\n<!-- End Passback -->";
};
