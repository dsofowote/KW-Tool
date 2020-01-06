integration.meta = {
   'sectionID' : '124463',
   'siteName' : 'IlMattino - Desktop - (IT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1254]
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706219',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 994,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_HideElementsByID" : "ads-leaderboard,google_ads_frame1",
	"plr_HideElementsByClass" : "",
	"plr_PageAlignment" : "center",
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg",
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* Call InSkin TabHide on load and on window resize */
		integration.custom.InSkinTabHide();
		$(window).resize(function() {
			integration.custom.InSkinTabHide();
		});
		/* click area fix */
		$("head").append("<style>.ism-frame{text-align : left}</style>");
		$("header, #socialbar").css({
			"margin" : "0 auto",
			"max-width" : "994px"
		});
		$("#nav-menu").css({
			"position" : "relative"
		});
		$("#header-wrapper, #menu-wrapper, #footer-wrapper").css({
			"max-width" : "994px",
			"margin" : "0 auto"
		});
	}
});

integration.on("layoutChange", function(e) {
	$("head").append("<style>.ism-frame{text-align : left}</style>");
	$("head").append("<style>.InSkinNav{margin-left:-497px !important; left:50% !important; max-width:994px;}</style>");
	$("#nav-menu").addClass("InSkinNav");
	$(".ism-frame").parent().css({
		"z-index" : "10050"
	});

});

integration.custom.InSkinTabHide = function() {
	var windowWidth = $(window).width()
	var minWindowWidth = 1330;
	if (windowWidth < minWindowWidth) {
		$("#left_arrow, #right_arrow").hide();
	} else {
		$("#left_arrow, #right_arrow").show();
	}
	if (windowWidth < 994) {
		$("#nav-menu").removeClass("InSkinNav");
	} else {
		$("#nav-menu").addClass("InSkinNav");
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/38681514/Mattino/HomePage/Skin', [1, 1]).display();\n<\\script> ";
};
