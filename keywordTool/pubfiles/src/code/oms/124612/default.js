integration.meta = {
	'sectionID' : '124612',
	'siteName' : 'Berliner Kurier - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706570',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1080,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".dm_page_header, .dm_page_content, .dm_footer_service, .dm_page_footer").css({
			"max-width" : "1080px",
			"min-width" : "1080px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".dm_page_header").css({
			"position" : "fixed"
		});
		$(".dm_container").css({
			"margin-left" : "0px"
		});
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
//////
