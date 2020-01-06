integration.meta = {
	'sectionID' : '128830',
	'siteName' : 'CharlieIntel - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1281]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1037179',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1021,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$("head").append("<style>._3zEEtS_0KXn3fBbZiqO5nS{right: " + (sideWidth - 20) + "px !important;}</style>");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('#td-outer-wrap').css({
			"width" : "1021px",
			"margin" : "0 auto"
		});
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
		$(".td-scroll-up").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".td-scroll-up").css({
			"right" : "5px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/MMPlus/Dexerto/CharlieIntel/Passback/970x250', [[970,250]]).setTargeting('Passback', ['InSkin']).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};