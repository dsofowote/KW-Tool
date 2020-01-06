integration.meta = {
	'sectionID' : '124545',
	'siteName' : 'Hamburger Morgenpost - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706407',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".dm_page_header, .dm_footer_service, .dm_page_footer").css({
			"max-width" : "980px",
			"margin-left" : "auto",
			"margin-right" : "auto",
			"left" : "0",
			"right" : "0"
		});
		$(".dm_ad-skyscraper").hide();
		$(".dm_ad-leaderboard").hide();
		$("head").append("<style>.dm_container{max-width: 980px; margin: 0 auto !important;}</style>");
		$("head").append("<style>.collectiveIvwBrand-logo-link{right: 115px !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".dm_page_header").css({
			"margin-top" : newheight
		});
	} else {
		$(".dm_page_header").css({
			"margin-top" : "0px"
		});
	}
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
