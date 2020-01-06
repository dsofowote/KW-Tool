integration.meta = {
	'sectionID' : '128340',
	'siteName' : ' Planet Football - Desktop - (INT) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005219',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 60,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.content-info, .container-footer').css({
			"width" : "1020px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.planet_sport_ad_2{display: none !important;}</style>");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1440 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#back-to-top").css({
			"right" : sideWidth + 20
		});
	} else {
		$("#back-to-top").css({
			"right" : "40px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/134356868/Planet_Sports/Planet_Football/InSkin_Passback', [970, 250]).display();\n<\\script>";
};
