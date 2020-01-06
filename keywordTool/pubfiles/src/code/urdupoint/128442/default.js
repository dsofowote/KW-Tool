integration.meta = {
	'sectionID' : '128442',
	'siteName' : ' Urdu Point - Desktop - (MENA) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013574',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1120,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on("layoutChange", function(e) {
	var width = $(window).width();
	var sideWidth = (width - 1020) / 2;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinTopNav();
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
		integration.custom.InSkinBottomNav();
	});
	$("#at4-follow, #at4-foc, #at-drawer-arrow, .scrollToTop").css({
		"right" : sideWidth
	});
	$("#main-scroll-top, .scroll-top").css({
		"right" : sideWidth + 15
	});
	$("#at-custom-sidebar, #at4-share").css({
		"left" : sideWidth
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#at-custom-sidebar, #at4-follow, #at4-share").css({
			"margin-top" : newheight
		});
	} else {
		$("#at-custom-sidebar, #at4-follow, #at4-share").css({
			"margin-top" : "0px"
		});
	}
}

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
		$(".scroll-top").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$(".scroll-top").css({
			"margin-bottom" : "0px"
		});
	}
}
