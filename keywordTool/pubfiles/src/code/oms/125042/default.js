integration.meta = {
	'sectionID' : '125042',
	'siteName' : 'Echo Online - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706310',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
	'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
	$('#skyscraper').hide();
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("#body-wrapper, #header").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("#page, .wrapper").css({
			"padding-right" : "0px"
		});
		$("#footer, #service").css({
			"padding-right" : "20px",
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("#tagline").css({
			"right" : "100px"
		});
		$('#super_sky').hide();
		integration.custom.BackToTopButton();
		$(window).resize(function() {
			integration.custom.BackToTopButton();
		});
	}
});

integration.custom.BackToTopButton = function() {
	var width = $(window).width();
	if (width < 1620) {
		$("#toplink").css({
			"visibility" : "hidden"
		});
	} else {
		$("#toplink").css({
			"visibility" : "visible"
		});
	}
};

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var LeftSpacing = parseInt($(".stickyNavigationContainer > .wrapper").css("margin-left"));
	var RightSpacing = parseInt($(".stickyNavigationContainer > .wrapper").css("margin-right"));
	if (width < 1540 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		$(".vrm-feedbackIcon").css({
			"left" : LeftSpacing
		});
		$(".vrm-button__scrollTop").css({
			"right" : RightSpacing
		});
	} else {
		$(".vrm-feedbackIcon").css({
			"left" : 0
		});
		$(".vrm-button__scrollTop").css({
			"right" : "10px"
		});
	}
};
