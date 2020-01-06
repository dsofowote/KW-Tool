integration.meta = {
	'sectionID' : '128338',
	'siteName' : 'HKET - (New Layout) - Desktop - ( HK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1600]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1004722',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1340,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".top-news-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".top-news-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0
			});
		}
		var width = $(window).width();
		var sideWidth = (width - 1340) / 2;
		var headHeight = $(".top-news-container").outerHeight();
		integration.base.setCfg({
			plr_ScrollAdjustment : headHeight + 10
		});
		$(".back-to-top-button, .floating-share-menu-container").css({
			"right" : sideWidth + 20
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
		var footermargin2 = footermargin + $(".back-to-top-button").height() + 10;
		$(".back-to-top-button").css({
			"margin-bottom" : footermargin + "px"
		});
		$(".floating-share-menu-container").css({
			"margin-bottom" : footermargin2 + "px"
		});
	} else {
		$(".back-to-top-button").css({
			"margin-bottom" : "0"
		});
		$(".floating-share-menu-container").css({
			"bottom" : "0"
		});
	}
}
