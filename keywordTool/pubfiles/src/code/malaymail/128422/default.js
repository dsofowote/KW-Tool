integration.meta = {
	'sectionID' : '128422',
	'siteName' : 'Malay Mail - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1011551',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("header, #navbar").css({"margin": "0 auto", "max-width": "1140px"});
		var headerHeight = $('#sticky-wrapper').outerHeight() + $('#navbar-sticky-wrapper').outerHeight() + $('#trending-scroll-sticky-wrapper').outerHeight() + $('.billboard').outerHeight();
		var StickyNavHeight = $('#navbar-sticky-wrapper').outerHeight() + $('#trending-scroll-sticky-wrapper').outerHeight();

		if ($("#trending-scroll-sticky-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#trending-scroll-sticky-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_StartScrollOnAnchor' : true,
				'plr_PageHeightAdjustment' : -headerHeight,
				'plr_ScrollAdjustment' : StickyNavHeight
			});
		}

		$('.content, footer, #mm-billboard').css({
			"width" : "1140px",
			"margin" : "0 auto"
		});

		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}

	}
});
