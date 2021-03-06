integration.meta = {
	'sectionID' : '126450',
	'siteName' : 'Koelner Stadt-Anzeiger - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706941',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".dm_page_header, .dm_page_content, .dm_footer_service, .dm_page_footer, .dm_container, ._dm_special_topics, div.dm_special_topics.header, .dm_special_topics.footer").css({
			"max-width" : "980px",
			"min-width" : "980px",
			"width" : "980px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".dm_page_header").css({
			"position" : "fixed"
		});
		$(".collectiveIvwBrand-logo-link").css({
				"right" : "0px",
				"top" : "1px"
		});
		$(".dm_breaking_news_full").css({
				"min-width" : "980px"
		});
		$(".module_for_tracking.dm_breaking_news_full.js_show_element").css({
			"min-width" : "0"
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
