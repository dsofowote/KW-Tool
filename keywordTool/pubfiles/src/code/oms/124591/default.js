integration.meta = {
	'sectionID' : '124591',
	'siteName' : 'Kölnische Rundschau',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706247',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".dm_footer_service, .dm_page_footer, .dm_page_content, .dm_container").css({
			"max-width" : "980px",
			"margin" : "0 auto",
		});
		$(".dm_breaking_news_full").css({
			"min-width" : "980px"
		});
		$(".dm_page_header").css({
			"max-width" : "980px",
			"min-width" : "980px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".dm_ad").css({
			"display" : "none"
		});
		$(".collectiveIvwBrand-logo-link").css({
			"right" : "116px"
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
