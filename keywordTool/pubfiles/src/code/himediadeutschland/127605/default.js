integration.meta = {
	'sectionID' : '127605',
	'siteName' : 'Rolling Stone - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1600]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '764878',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#wrapper > div.ph-header-wrapper.is-narrow-layout, #wrapper > footer, .asmb-menu-divider-helper, .ph-footer-wrapper, .asmb-menu .grid-container-content").css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
		$(".ph-actionbar-wrapper").css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
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
	if (width < 1380 || integration.custom.isSuper) {
		var sideWidth = (width - 1280) / 2;
		$(".ph-article-nav.ph-article-nav-next").css({
			"right" : sideWidth
		});
		$(".ph-article-nav.ph-article-nav-prev").css({
			"left" : sideWidth
		});
	} else {
		$(".ph-article-nav.ph-article-nav-next").css({
			"right" : "0px"
		});
		$(".ph-article-nav.ph-article-nav-prev").css({
			"left" : "0px"
		});
	}
}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});
