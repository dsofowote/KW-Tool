integration.meta = {
	'sectionID' : '128515',
	'siteName' : 'AVForums - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1020895',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1225,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#site-wrapper').css({
				'width' : '1225px',
				"margin" : "0"
			});
			$("head").append("<style>#header #moderatorBar > .pageWidth{margin: 0 !important;} .navTabs{margin-left: 20px !important;}</style>");
			$("head").append("<style>.headerStyle2 #header #QuickSearch, .SedoGoToTop{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
		}
		integration.custom.FrameTop = e.data.plr_FrameTop;
		$('.navTabs, .p-nav, .p-navSticky').css({
			'width' : '1225px',
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".m2n-ads-slot.adHeader").css({"display": "none"});
		$('.headerStyle2 #header #QuickSearch').css({
			'position' : 'fixed',
			"top" : integration.custom.FrameTop + 58,
			'right' : RightMargin
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().addClass('inskin');
});

integration.on('layoutChange', function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	integration.custom.FrameTop = e.data.plr_FrameTop;
	var RightMargin = $('#content > .pageWidth').css('margin-right');
	integration.custom.top();
	$(document).scroll(function() {
		integration.custom.top();
	});
});

integration.custom.top = function() {
	var RightMargin = $('#content > .pageWidth').css('margin-right');
	if ($(document).scrollTop() === 0) {
		$('#headerMover #header').css({
			'position' : 'absolute'
		});
		$('#header #moderatorBar').css({
			'top' : integration.custom.FrameTop
		});
		$('.navTabs').css({
			'position' : 'fixed',
			"top" : integration.custom.FrameTop + 58
		});
		$('.headerStyle2 #header #QuickSearch').css({
			'position' : 'fixed',
			"top" : integration.custom.FrameTop + 56,
			'right' : RightMargin
		});
	} else {
		$('#header #moderatorBar').css({
			'top' : 0
		});
		$('.navTabs').css({
			'position' : 'fixed',
			"top" : 58
		});
		$('.headerStyle2 #header #QuickSearch').css({
			'position' : 'fixed',
			"top" : 56,
			'right' : RightMargin
		});
	}
};

integration.custom.floatingButtons = function() {
	var RightMargin = parseInt($('#content > .pageWidth').css('margin-right'));
	var width = $(window).width();
	$(".SedoGoToTop").css({
		"right" : RightMargin + 10
	});
};
