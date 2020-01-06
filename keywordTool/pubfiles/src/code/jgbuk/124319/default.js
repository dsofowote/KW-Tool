integration.meta = {
	"sectionID" : "124319",
	"siteName" : "Club website",
	"publisher" : "jgb",
	"platform" : "desktop"
};

//integration.disableTelemetry = false;



integration.testParams = {};

integration.params = {
  'mf_siteId': '681763',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "video_player",
	"plr_HideElementsByClass" : "skyscraper, bannerAd, innerfade, leaderboardBottom"
};

integration.on("adServed", function(e) {
	$('#skin').css({
		'background' : 'none'
	});
	$("#wrapper").css({
		'background' : 'white'
	});
	$('.parent-panel, #panel').css({
		'position' : 'relative'
	});
	$('.parent-panel, #panel').css({
		'marginBottom' : '-40px'
	});
	$('.ism-frame').css({
		'zIndex' : '1001'
	});
	/* New clubwebsite */
	$('#fullwrap').css({
		'width' : '1024px',
		'margin' : '0 auto'
	});
	/* code requested by publiser */
	$('.footer-content').css({
		'right' : '15px'
	});
	$('.footer-content').css({
		'margin-left' : '43px'
	});
	integration.custom.InSkinTabHide();
	$(window).resize(function() {
		integration.custom.InSkinTabHide();
	});
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#ad_leaderboard").hide();
		/* background color set to white at publishers request */
		$('body').css({
			'background-color' : 'white'
		});
	}
});

integration.custom.InSkinTabHide = function() {
	var windowWidth = $(window).width()
	var minWindowWidth = 1360;
	if (windowWidth < minWindowWidth) {
		$('#un-button').hide();
	} else {
		$('#un-button').show();
	}
}

/* Passback Tag */
window.ISMPassback = function() {
	var key = "";
	if (integration.params.srv_Keywords == "over18") {
		console.log("Over 18s");
		key = "over18";
	} else if (integration.params.srv_Keywords == "under18") {
		console.log("Under 18s");
		key = "under18"
	} else {
		key = "unknown";
	}
	switch( key ) {
	case "over18":
		console.log("over18 passback");
		passback = "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/2820490/CW_Over18_970x250', [970, 250]).display();\n<\\script>";
		break;
	case "under18":
		console.log("under18 passback");
		passback = "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/2820490/CW_Under18_970x250', [970, 250]).display();\n<\\script>";
		break;
	default:
		console.log("default passback");
		passback = "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/2820490/CW_Under18_970x250', [970, 250]).display();\n<\\script>";
	}
	return passback;
}; 