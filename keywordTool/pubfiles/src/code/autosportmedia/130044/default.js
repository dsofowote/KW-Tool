integration.meta = {
    'sectionID' : '130044',
    'siteName' : 'Motor1 - Tablet - (IT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1101506',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
        var headerHeight = $(".m1-header-main").outerHeight();
		if ($(".m1-header-main").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".m1-header-main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
			});
		}
		$(".top-banner-placeholder").hide();
        $('head').append('<style type="text/css">[id^="page_index_"] {margin: 0 auto !important}</style>');
        $('head').append('<style type="text/css">.ism-anchor {top: '+headerHeight+'px; z-index: 5}</style>');
        $('head').append('<style type="text/css">.m1-top-slider-wrapper {padding-top: '+headerHeight+'px}</style>');
		$(".m1-header-ad, #page_skin_top").css({"display": "none"});
		$("head").append("<style id='ismResize'></style>");

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.root {margin: 0 !important; max-width: 1024px; overflow: visible}</style>");
			$(".m1-header-main").css({"min-width": "1344px", "margin-left": "-20px"});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).resize(function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var shareBoxLeft = ($(window).width() - 1400) / 2;
	$("#floating_share_box").css({
		"left" : shareBoxLeft
	});

}